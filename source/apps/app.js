/*
	test protocol

	test system creates a new test instance using createComponent, then calls runTest() on it.
	At some point in the future, runner gets reportResults event from the test, then uses
	that to destroy the test and start the next one.  When no tests remain, all reports
	are shown on screen.
*/

enyo.kind({
	name: "enyoBench.Application",
	kind: "enyo.Application",
	view: {
		kind: "enyoBench.ReportView"
	},
	renderOnStart: false,
	// each test is based on enyo.ViewController and renders
	// into document.body by default
	tests: [
		"enyoBench.BlankTest",
		"enyoBench.PanelTest",
		"enyoBench.ListScrollingTest"
	],
	create: function() {
		this.inherited(arguments);
		// look at window URL query to refine test list
		if (window.location.search) {
			var matches = window.location.search.match(/[?&]test=(.*?)(&|$)/);
			if (matches) {
				this.tests = [ matches[1] ];
			}
		}
	},
	// run all of the tests; when done, render the results
	runTests: function() {
		this.testResults = [];
		this.currentTestIndex = 0;
		enyo.asyncMethod(this, this.runNextTest);
	},
	// called asynchronously to process the next test
	runNextTest: function() {
		// destroy any existing test instance
		if (this.$.test) {
			this.$.test.destroy();
		}
		// stop running if there are no tests left
		if (this.currentTestIndex >= this.tests.length) {
			this.reportFullResults();
		} else {
			var test = this.tests[this.currentTestIndex++];
			this.createComponent({
				kind: test,
				name: "test",
				onReportResults: "processTestResults"
			});
			this.$.test.runTest();
		}
	},
	processTestResults: function(inSender, inEvent) {
		this.testResults.push(inEvent);
		enyo.asyncMethod(this, this.runNextTest);
		return true;
	},
	// enyoBench always gathers startup time separately from
	// the tests that it runs.  This needs to run before the
	// report is shown, but after any test rendering is complete.
	updateTimings: function() {
		var perfTiming = window.performance.timing;
		var base = perfTiming.navigationStart;
		var enyoTiming = enyoBench.timing;
		this.timestamps = [
			{ display: "fetchStart",                 time: perfTiming.fetchStart - base },
			{ display: "enyo.js Load Start",         time: enyoTiming.enyoLoadStart },
			{ display: "enyo.js Load End",           time: enyoTiming.enyoLoadEnd },
			{ display: "app.js Load Start",          time: enyoTiming.appLoadStart },
			{ display: "app.js Load End",            time: enyoTiming.appLoadEnd },
			{ display: "domInteractive",             time: perfTiming.domInteractive - base },
			{ display: "domContentLoadedEventStart", time: perfTiming.domContentLoadedEventStart - base },
			{ display: "domContentLoadedEventEnd",   time: perfTiming.domContentLoadedEventEnd - base },
			{ display: "domComplete",                time: perfTiming.domComplete - base }
		];
	},
	// run after all tests complete, finally renders the main view
	reportFullResults: function() {
		this.updateTimings();
		this.view.setTimestamps(this.timestamps);
		this.view.setResults(this.testResults);
		this.render();
	}
});