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

var ListScrollingTest = speedKind({
	name: "enyoBench.ListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "Vertical List Scrolling (1000 items)",
	view: kind({
		name: 'scroller',
		kind: Scroller,
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
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		this.startJob("nextStep", "nextStep", 100);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!utils.exists(this.step)) {
			return true;
		}
		if (this.step === 0) {
			this.$.scroller.scrollTo(0, this.$.scroller.getScrollBounds().maxTop);
			this.startJob("scrolledToEnd", "nextStep", 3000);
		}
		else if (this.step === 1) {
			this.$.scroller.scrollTo(0, 0);
			this.startJob("scrolledToStart", "nextStep", 3000);
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});

module.exports = ListScrollingTest;