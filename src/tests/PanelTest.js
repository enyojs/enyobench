var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var	
	Image = require('enyo/Image'),
	Panels = require('layout/Panels'),
	FittableRows = require('layout/FittableRows'),
	LeftRightArranger = require('layout/LeftRightArranger');

var
	speedKind = require('./SpeedTest');

var
	SpeedTestKind = require('./SpeedTestKind');

module.exports = speedKind({
	name: "enyoBench.PanelTest",
	kind: "enyoBench.SpeedTest",
	testName: "Panel Left-Right Animation",
	view: kind({
		kind: FittableRows,
		components: [
			{
				kind: Panels,
				name:"samplePanels",
				fit: true,
				realtimeFit: true,
				classes: "panelstest-panels enyo-border-box",
				arrangerKind: LeftRightArranger,
				components: [
					{content:0, style: "background: red;"},
					{content:1, style: "background: orange;"},
					{content:2, style: "background: yellow;"},
					{content:3, style: "background: green;"},
					{content:4, style: "background: blue;"},
					{content:5, style: "background: indigo;"},
					{content:6, style: "background: violet;"}
				]
			}
		]
	}),
	handlers: {
		onTransitionFinish: "nextStep"
	},
	// test is to start showing panel 0, then transition to
	// 1, then 2, all the way to 6, starting each transition
	// when previous animation is complete.
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
		// ignore early call to handler from panel setup
		if (!utils.exists(this.step)) {
			return;
		}
		// steps 0 to 4: go to next panel #2 through #6
		if (this.step >= 0 && this.step <= 4) {
			utils.asyncMethod(this.view.$.samplePanels, this.view.$.samplePanels.next);
		}
		// steps 5 to 9: go to previous panel
		else if (this.step >= 5 && this.step <= 9) {
			utils.asyncMethod(this.view.$.samplePanels, this.view.$.samplePanels.previous);
		}
		// step 10: go to next panel
		else {
			this.testComplete();
		}
		this.step++;
		// stop event propagation
		return true;
	}
});