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
	Panels = require('moonstone/Panels');
	Panel = require('moonstone/Panel'),
	Scroller = require('moonstone/Scroller');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.MoonComplexPanelRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Complex Panel Render",
	resetView: true,
	view: kind({
		kind: Panels,
		pattern: "activity",
		components: [{
			kind: Panel,
			title: "Moonstone Panel",
			components: [
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
			]
		}],
		create: function() {
			this.inherited(arguments);
		}
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 20; ++i) {
			// test creating our view object repeatedly
			this.render();
			this.view.destroy();
		}
		this.resetView = false;	// Patch for ENYO-355
		this.testComplete();
	}
});
