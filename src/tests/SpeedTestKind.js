var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	ViewController = require('enyo/ViewController');

/* global FPS:true, console: true */

// this is an abstract base-kind for tests in EnyoBench,
// implementing the boilerplate

// set global test list that we'll manually add all test kinds into
enyoBench.tests = [];

module.exports = kind({
	name: "enyoBench.SpeedTest",
	kind: ViewController,
	testName: "Abstract Test Kind",
	// if set to true, record and report JS-based frames-per-second
	reportFPS: false,
	events: {
		onReportResults: ""
	},
	create: function() {
		this.inherited(arguments);
		this.loggingEnabled = (console && console.time && console.timeEnd);
		this.pmTraceEnabled = (window.PalmSystem && window.PalmSystem.PmTraceBefore && window.PalmSystem.PmTraceAfter);
	},
	// call this.render() before or after this depending on if you're
	// measuring render performance or animation performance.  Also be
	// sure to setup some sort of callback that will eventually call
	// this.testComplete.
	runTest: function() {
		this.testStart = this.recordStartTime();
		if (this.reportFPS) {
			FPS.startMeasurement();
		}
	},
	// called when test is over
	testComplete: function() {
		if (this.reportFPS) {
			FPS.stopMeasurement();
		}
		var testEnd = this.recordEndTime();
		var testDuration = testEnd - this.testStart;

		var results = {
			name: this.testName,
			kind: this.kind,
			start: this.testStart,
			end: testEnd,
			duration: testDuration,
			key: this.key //hacky way to send a key based on the kind name
		};
		if (this.reportFPS) {
			results.fps = FPS.averageRateOverTime(testDuration);
		}
		this.doReportResults(results);
		return true;
	},
	skipTest: function() {
		var results = {
			name: this.testName,
			kind: this.kind
		};
		this.doReportResults(results);
	},
	recordStartTime: function() {
		if (this.loggingEnabled) {
			console.time(this.kindName);
		}
		if (this.pmTraceEnabled) {
			window.PalmSystem.PmTraceBefore(this.kindName);
		}
		return utils.perfNow();
	},
	recordEndTime: function() {
		if (this.pmTraceEnabled) {
			window.PalmSystem.PmTraceAfter(this.kindName);
		}
		if (this.loggingEnabled) {
			console.timeEnd(this.kindName);
		}
		return utils.perfNow();
	}
});