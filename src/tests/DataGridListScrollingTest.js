var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	Collection = require('enyo/Collection'),
	FittableRows = require('layout/FittableRows'),
	DataGridList = require('moonstone/DataGridList'),
	GridListImageItem = require('moonstone/GridListImageItem');


var
	utils = require('enyo/utils');


module.exports = speedKind({
	name: "enyoBench.DataGridListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "DataGridList Vertical Scrolling (1000 items)",
	classes: "moon enyo-fit",
	view: kind({
		kind: FittableRows,
		components: [{
			name: "gridList",
			spacing: 20,
			minWidth: 180,
			minHeight: 240,
			renderDelay: null,
			kind: DataGridList,
			components: [{
				kind: GridListImageItem,
				subCaption: "Sub Caption",
				source: "./assets/default-music.png",
				bindings: [
					{ from: ".model.text", to: ".caption" }
				]
			}]
		}]
	}),
	runTest: function() {
		var c = new Collection();
		for (var $i=0, r$=[]; r$.length<1000; ++$i) {
			r$.push({text: "Item " + $i});
		}
		c.add(r$);
		this.view.$.gridList.set("collection", c);
		this.render();
		this.inherited(arguments);
		// only set step after render complete to avoid bogus events
		this.step = 0;
		this.startJob("startScrolling", "nextStep", 100);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!utils.exists(this.step)) {
			return true;
		}
		if(this.step >= 2){
			this.testComplete();
		}
		else if(this.step === 0) {
			this.view.$.gridList.$.scroller.scrollTo(0,this.view.$.gridList.$.scroller.getScrollBounds().maxTop);
			this.startJob("scrolledToEnd", "nextStep", 3000);
		}
		else if(this.step === 1) {
			this.view.$.gridList.$.scroller.scrollTo(0,0);
			this.startJob("scrolledToStart", "nextStep", 3000);
		}
		this.step++;

		return true;
	}
});
