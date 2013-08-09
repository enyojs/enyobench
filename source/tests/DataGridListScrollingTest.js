enyoBench.speedKind({
	name: "enyoBench.DataGridListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "DataGridList Vertical Scrolling (1000 items)",
	classes: "moon enyo-fit",
	handlers:{
		//ontap:"nextStep"
	},
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [
			{kind: "enyo.Spotlight"},
			{name: "gridList", spacing: 20, minWidth: 180, minHeight: 240, kind: "moon.DataGridList", components: [
				{
					kind: "moon.GridListImageItem",
					subCaption: "Sub Caption",
					source: "./assets/default-music.png",
					bindFrom: ".text",
					bindTo: ".caption"
				}
			]}
		]
	}),
	runTest: function() {
		var c = new enyo.Collection();
		for (var $i=0, r$=[]; r$.length<1000; ++$i) {
			r$.push({text: "Item " + $i});
		}
		c.add(r$);
		this.view.$.gridList.set("controller", c);
		this.step = 0;
		this.render();
		this.inherited(arguments);
		setTimeout(enyo.bind(this, "nextStep"), 2000);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}
		if(this.step >= 2){
			this.testComplete();
		}
		else if(this.step == 0) {
			this.view.$.gridList.$.scroller.scrollTo(0,this.view.$.gridList.$.scroller.getScrollBounds().maxTop);
			setTimeout(enyo.bind(this, "nextStep"), 8000);
		}
		else if(this.step == 1) {
			this.view.$.gridList.$.scroller.scrollTo(0,0);
			setTimeout(enyo.bind(this, "nextStep"), 8000);
		}
		this.step++;

		return true;
	}
});