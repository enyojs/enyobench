var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	ExpandablePicker = require('moonstone/ExpandablePicker'),
	Scroller = require('moonstone/Scroller');

var
	utils = require('enyo/utils');

var
	SpeedTestKind = require('./SpeedTestKind');

module.exports = speedKind({
	name: "enyoBench.MoonEmptyPanelAnimationForward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Empty Panel Animation Forward",
	view: kind({
		kind: FittableRows,
		components: [{
			kind: Panels,
			name: "panels",
			pattern: "activity",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: red;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: orange;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: yellow;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: green;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: blue;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: indigo;"},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: violet;"}
			]
		}]
	}),
	handlers: {
		onTransitionFinish: "nextStep"
	},
	runTest: function() {
		this.render();
		this.step = 0;
		setTimeout(this.bindSafely("firstStep"), 1000);
	},
	firstStep: function() {
		SpeedTestKind.prototype.runTest.call(this);
		this.nextStep();
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!utils.exists(this.step)) {
			return true;
		}
		if (this.step < this.view.$.panels.getPanels().length - 1) {
			this.view.$.panels.next();
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});