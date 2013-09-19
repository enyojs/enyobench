enyoBench.speedKind({
	name: "enyoBench.DataListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "DataList Vertical Scrolling (1000 items)",
	handlers:{
		onScrollStop: "nextStep"
	},
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [
			{name: "gridList", kind: "moon.DataList", components: [
				{
					kind: "moon.ImageItem",
					source: "assets/default-music.png",
					bindFrom: ".text",
					bindTo: ".text"
				}
			]}
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
		this.view.$.gridList.set("controller", c);
		this.render();
		this.inherited(arguments);
		// only set step after render complete to avoid bogus events
		this.step = 0;
		this.nextStep();
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
		}
		else if(this.step === 1) {
			this.view.$.gridList.$.scroller.scrollTo(0,0);
		}
		this.step++;

		return true;
	}
});