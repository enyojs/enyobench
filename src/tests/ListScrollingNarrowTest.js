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

var NarrowListScrollingTest = speedKind({
	name: "enyoBench.NarrowListScrollingTest",
	kind: ListScrollingTest,
	testName: "Narrow Vertical List Scrolling (1000 items)",
	view: kind({
		kind: Scroller,
		name: 'scroller',
		style: "width: 320px;",
		components: [{
			kind: List,
			name: "list",
			fit: true,
			touch: true, /* needed to get animated scrolling */
			count: 1000,
			onSetupItem: "setupItem",
			components: [{
				name: "label"
			}]
		}],
		setupItem: function(inSender, inEvent) {
			var index = inEvent.index;
			var item = inEvent.item;
			
			item.$.label.setContent("Row " + index);
			return true;
		}
	})
});

module.exports = NarrowListScrollingTest;