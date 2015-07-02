
var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Collection = require('enyo/Collection'),
	Item = require('moonstone/Item'),
	DataList = require('moonstone/DataList'),
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel');

var
	utils = require('enyo/utils');

var MoonDataListScrollingTest = speedKind({
	name: "enyoBench.MoonDataListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "Vertical List, Moonstone Scroller (1000 items)",
	view: kind({
		kind: FittableRows,
		components: [{
			kind: DataList,
			name: "list",
			fit: true,
			renderDelay: null,
			components: [
				{ components: [{
					kind: Item,
					name: "label"
				}],
				bindings: [
					{ from: "model.idx", to: "$.label.content" }
				]
			}]
		}]
	}),
	runTest: function() {
		var data=[], i;
		for(i = 0; i < 1000; i++) {
			data.push({idx: "Moonstone Row " + i});
		}
		this.set("view.$.list.collection", new Collection(data));
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
			this.view.$.list.scrollToIndex(this.view.$.list.collection.length-1);
			this.startJob("scrolledToEnd", "nextStep", 3000);
		}
		else if (this.step === 1) {
			this.view.$.list.scrollToIndex(0);
			this.startJob("scrolledToStart", "nextStep", 3000);
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});

module.exports = MoonDataListScrollingTest;