var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.MoonEmptyPanelRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Empty Panel Render",
	view: kind({
		kind: Panels,
		pattern: "activity",
		components: [{
			kind: Panel,
			title: "Moonstone Panel"
		}]
	}),
	render: function() {
		this.inherited(arguments);
		this.testComplete();
	},
	runTest: function() {
		this.inherited(arguments);
		this.render();
	}
});