var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	utils = require('enyo/utils');

// simple test that shows a mostly blank page for 1 second. used to calibrate
// system FPS measurement by testing the browser at rest.
module.exports =speedKind({
	name: "enyoBench.BlankTest",
	kind: "enyoBench.SpeedTest",
	testName: "Baseline FPS (Blank Page)",
	view: kind({
		components: [
			{tag: "h1", content: "Calibrating FPS Counter"}
		]
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		setTimeout(utils.bind(this, this.testComplete), 1000);
	}
});