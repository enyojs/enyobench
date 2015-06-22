var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	FittableRows = require('layout/FittableRows'),
	DataList = require('moonstone/DataList'),
	ImageItem = require('moonstone/ImageItem');

var
	utils = require('enyo/utils');


module.exports = speedKind({
	name: "enyoBench.DataListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "DataList Vertical Scrolling (1000 items)",
	view: kind({
		kind: FittableRows,
		components: [
			{name: "gridList", kind: DataList, components: [{
				kind: ImageItem,
				source: "assets/default-music.png",
				bindings: [
					{ from: ".model.text", to: ".text"}
				]
			}]}
		]
	}),
	create: function () {
		this.inherited(arguments);
	},
	runTest: function() {
		var c = new enyo.Collection();
		for (var $i=0, r$=[]; r$.length<1000; ++$i) {
			r$.push({text: "Item " + $i});
		}
		c.add(r$);
		this.view.$.gridList.set("collection", c);
		this.render();
		this.inherited(arguments);
		// only set step after render complete to avoid bogus events
		this.step = 0;
		this.startJob("startScrolling", "nextStep", 800);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
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
			this.startJob("scrolledToTop", "nextStep", 3000);
		}
		this.step++;

		return true;
	}
});
