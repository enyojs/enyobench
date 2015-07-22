var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	Component = require('enyo/Component'),
	ExpandablePicker = require('moonstone/ExpandablePicker'),
	ExpandableInput = require('moonstone/ExpandableInput'),
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	Scroller = require('moonstone/Scroller');

var
	utils = require('enyo/utils');

var
	SpeedTestKind = require('./SpeedTestKind');

module.exports = speedKind({
	name: "enyoBench.MoonComplexPanelAnimationForward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Complex Panel Animation Forward",
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
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: orange;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: yellow;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: green;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: blue;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: indigo;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: Panel, title: "Moonstone Panel", classes: "moon-7h", style: "background: violet;", components: [
					{kind: Scroller, fit: true, components: [
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2", active: true},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3", active: true}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1"},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandablePicker, content: "Picker", noneText: "None Selected", components: [
							{content: "Option 1", active: true},
							{content: "Option 2"},
							{content: "Option 3"}
						]},
						{kind: ExpandableInput, content: "Input", noneText: "No Input"},
						{kind: ExpandableInput, content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: ExpandableInput, content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: ExpandableInput, content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
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