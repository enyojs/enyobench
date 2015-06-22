var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	ExpandablePicker = require('moonstone/ExpandablePicker'),
	Scroller = require('moonstone/Scroller'),
	MoonEmptyPanelAnimationForward = require('./MoonEmptyPanelAnimationForward');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.MoonEmptyPanelAnimationBackward",
	kind: MoonEmptyPanelAnimationForward,
	testName: "Moonstone Empty Panel Animation Backward",
	runTest: function() {
		this.render();
		this.step = 0;
		setTimeout(this.bindSafely("firstStep"), 1000);
	},
	firstStep: function() {
		// start test counting now
		enyoBench.SpeedTest.prototype.runTest.call(this);
		this.view.$.panels.setIndex(this.view.$.panels.getPanels().length - 1);
		// nextStep will be called by transitionFinish
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}
		if (this.view.$.panels.getIndex() > 0) {
			this.goPrevious();
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	},
	goPrevious: function() {
		this.view.$.panels.previous();
	}
});