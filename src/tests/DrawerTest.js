
var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component'),
	Control = require('enyo/Control'),
	Drawers = require('moonstone/Drawers'),
	FittableRows = require('layout/FittableRows'),
	Header = require('moonstone/Header'),
	Item = require('moonstone/Item'),
	Panels = require('moonstone/Panels');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.DrawerTest",
	kind: "enyoBench.SpeedTest",
	testName: "Drawer Animation",
	handlers:{
		//ontap:"nextStep"
	},
	view: kind({
		kind: FittableRows,
		components: [
			{
				name: "drawers",
				kind: Drawers,
				drawers:[
					{
						name: "searchDrawer",
						handle: {content: "Full drawer"},
						components: [
							{kind: Header, title: "Full Drawer"},
							{kind: Item, content: "Item One"},
							{kind: Item, content: "Item Two"}
						]
					}
				],
				components: [
					{
						name: "panels",
						kind: Panels,
						classes: "enyo-fit",
						components: [
							{title: "First", components: [
								{kind: Item, content: "Item One"},
								{kind: Item, content: "Item Two"},
								{kind: Item, content: "Item Three"},
								{kind: Item, content: "Item Four"},
								{kind: Item, content: "Item Five"}
							]},
							{title: "Second", components: [
								{kind: Item, content: "Item One"},
								{kind: Item, content: "Item Two"},
								{kind: Item, content: "Item Three"},
								{kind: Item, content: "Item Four"},
								{kind: Item, content: "Item Five"}
							]}
						]
					}
				]
			}
		]
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		setTimeout(this.bindSafely("nextStep"), 1000);
	},
	nextStep: function(inSender, inEvent) {
		// ignore early call to handler from panel setup
		if (!utils.exists(this.step)) {
			return;
		}
		if(this.step >= 10){
			this.testComplete();
		}
		else if (this.step % 2 === 0) {
			this.view.$.searchDrawer.setOpen(true);
			setTimeout(this.bindSafely("nextStep"), 500);
		}
		else {
			this.view.$.searchDrawer.setOpen(false);
			setTimeout(this.bindSafely("nextStep"), 500);
		}
		this.step++;
		return true;
	}
});