
var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	DataList = require('moonstone/DataList'),
	Item = require('moonstone/Item'),
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel');

var
	utils = require('enyo/utils');


module.exports = speedKind({
	name: "enyoBench.MoonItemRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Item Render Test",
	resetView: true,
	view: kind({
		kind: Control,
		classes: "enyo-fit",
		defaultKind: Item,
		components: [
			{content: "Item One"},
			{content: "Item Two"},
			{content: "Item Three"},
			{content: "Item Four"},
			{content: "Item Five"},
			{content: "Item Six"},
			{content: "Item Seven"},
			{content: "Item Eight"},
			{content: "Item Nine"},
			{content: "Item Ten"}
		]
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 100; ++i) {
			// test creating our view object repeatedly
			this.render();
			this.view.destroy();
		}
		this.testComplete();
	}
});