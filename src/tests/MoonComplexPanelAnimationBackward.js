var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	Component = require('enyo/Component');

var
	utils = require('enyo/utils');

var
	MoonComplexPanelAnimationForward = require('./MoonComplexPanelAnimationForward');

var
	SpeedTestKind = require('./SpeedTestKind');

module.exports = speedKind({
	name: "enyoBench.MoonComplexPanelAnimationBackward",
	kind: MoonComplexPanelAnimationForward,
	testName: "Moonstone Complex Panel Animation Backward",
	runTest: function() {
		this.render();
		this.step = 0;
		setTimeout(this.bindSafely("firstStep"), 1000);
	},
	firstStep: function() {
		// start test counting now
		SpeedTestKind.prototype.runTest.apply(this)
		this.view.$.panels.setIndex(this.view.$.panels.getPanels().length - 1);
		// nextStep will be called by transitionFinish
	},
	nextStep: function() {
		// exit early if we get event before test starts
		if (!utils.exists(this.step)) {
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