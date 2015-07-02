var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	Component = require('enyo/Component'),
	List = require('enyo/Repeater'),
	Repeater = require('enyo/Repeater'),
	FittableRows = require('layout/FittableRows'),
	Scroller = require('enyo/Scroller');

var
	utils = require('enyo/utils');

var ListScrollingTest = require('./ListScrollingTest');

var StaticScrollingTest = speedKind({
	name: "enyoBench.StaticScrollingTest",
	kind: ListScrollingTest,
	testName: "Static Content Scrolling (1000 items)",
	view: kind({
		kind: Scroller,
		name: "scroller",
		touch: true,
		fit: true,
		components: [{
			name:'list', 
			kind: Repeater,
			count: 1000,
			onSetupItem: "setupItem",
			components: [{
				name: "label"
			}]
		}]
		,
		setupItem: function(inSender, inEvent) {
			var index = inEvent.index;
			var item = inEvent.item;
			item.$.label.setContent("Static Row " + index);
			return true;
		}
	})
});

module.exports = StaticScrollingTest;