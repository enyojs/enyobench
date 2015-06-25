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
	Scroller = require('layout/FittableRows');

var
	utils = require('enyo/utils');

var ListScrollingTest = speedKind({
	name: "enyoBench.ListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "Vertical List Scrolling (1000 items)",
	view: kind({
		kind: FittableRows,
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
			this.$.label.setContent("Row " + index);
			return true;
		}
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		this.startJob("nextStep", "nextStep", 100);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}
		if (this.step === 0) {
			this.view.$.list.scrollTo(0, this.view.$.list.getScrollBounds().maxTop);
			this.startJob("scrolledToEnd", "nextStep", 3000);
		}
		else if (this.step === 1) {
			this.view.$.list.scrollTo(0, 0);
			this.startJob("scrolledToStart", "nextStep", 3000);
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});

var NarrowListScrollingTest = speedKind({
	name: "enyoBench.NarrowListScrollingTest",
	kind: ListScrollingTest,
	testName: "Narrow Vertical List Scrolling (1000 items)",
	view: kind({
		kind: FittableRows,
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
			this.$.label.setContent("Row " + index);
			return true;
		}
	})
});

var StaticScrollingTest = speedKind({
	name: "enyoBench.StaticScrollingTest",
	kind: ListScrollingTest,
	testName: "Static Content Scrolling (1000 items)",
	view: kind({
		kind: FittableRows,
		components: [{
			name: "list",
			kind: Scroller,
			touch: true,
			fit: true,
			components: [{
				kind: Repeater,
				count: 1000,
				onSetupItem: "setupItem",
				components: [{
					name: "label"
				}]
			}]
		}],
		setupItem: function(inSender, inEvent) {
			var index = inEvent.index;
			var item = inEvent.item;
			item.$.label.setContent("Static Row " + index);
			return true;
		}
	})
});

module.exports = {
	ListScrollingTest: ListScrollingTest,
	NarrowListScrollingTest: NarrowListScrollingTest,
	StaticScrollingTest: StaticScrollingTest
}