/* global FPS */

// this is an abstract base-kind for tests in EnyoBench,
// implementing the boilerplate

enyo.kind({
	name: "enyoBench.SpeedTest",
	kind: "enyo.ViewController",
	testName: "Abstract Test Kind",
	events: {
		onReportResults: ""
	},
	// call this.render() before or after this depending on if you're
	// measuring render performance or animation performance.  Also be
	// sure to setup some sort of callback that will eventually call
	// this.testComplete.
	runTest: function() {
		this.testStart = enyo.bench();
		FPS.startMeasurement();
	},
	// called when test is over
	testComplete: function() {
		FPS.stopMeasurement();
		var testEnd = enyo.bench();
		var testDuration = testEnd - this.testStart;
		var results = {
			name: this.testName,
			kind: this.kind,
			start: this.testStart,
			end: testEnd,
			duration: testDuration,
			fps: FPS.averageRateOverTime(testDuration)
		};
		this.doReportResults(results);
		return true;
	}
});