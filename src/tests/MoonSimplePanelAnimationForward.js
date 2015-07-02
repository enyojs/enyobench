var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Button = require('moonstone/Button'),
	FittableRows = require('layout/FittableRows'),
	Input = require('moonstone/Input'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	ExpandablePicker = require('moonstone/ExpandablePicker'),
	Scroller = require('moonstone/Scroller'),
	ProgressBar = require('moonstone/ProgressBar');

var
	utils = require('enyo/utils');

var
	SpeedTestKind = require('./SpeedTestKind');

module.exports = speedKind({
	name: "enyoBench.MoonSimplePanelAnimationForward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Simple Panel Animation Forward",
	view: kind({
		kind: FittableRows,
		components: [{
			kind: Panels,
			name: "panels",
			pattern: "activity",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: red;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: orange;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: yellow;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: green;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: blue;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: indigo;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: violet;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: Button, content: "Button 1"},
						{kind: Button, content: "Button 2"},
						{kind: ProgressBar, progress: 50},
						{kind: ProgressBar, progress: 25},
						{kind: Input, content: "Input", noneText: "No Input"},
						{kind: Input, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: Input, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: Input, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]}
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