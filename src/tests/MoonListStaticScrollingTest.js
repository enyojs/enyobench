var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Collection = require('enyo/Collection'),
	DataList = require('moonstone/DataList'),
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	Repeater = require('enyo/Repeater'),
	Scroller = require('moonstone/Scroller');

var
	utils = require('enyo/utils');

var StaticMoonScrollingTest = speedKind({
	name: "enyoBench.StaticMoonScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "Static Content, Moonstone Scroller (1000 items)",
	view: kind({
		kind: FittableRows,
		components: [{
			name: "list",
			kind: Scroller,
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
			item.$.label.setContent("Moonstone Static Row " + index);
			return true;
		}
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		this.nextStep();
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!utils.exists(this.step)) {
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

module.exports = StaticMoonScrollingTest;