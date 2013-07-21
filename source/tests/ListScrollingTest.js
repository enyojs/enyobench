enyo.kind({
	name: "enyoBench.ListScrollingTest",
	kind: "enyoBench.SpeedTest",
	testName: "Vertical List Scrolling (1000 items)",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			kind: "enyo.List",
			name: "list",
			fit: true,
			touch: true, /* needed to get animated scrolling */
			count: 1000,
			onSetupItem: "setupItem",
			components: [{
				name: "label"
			}]
		}]
	}),
	handlers: {
		onScrollStop: "nextStep"
	},
	setupItem: function(inSender, inEvent) {
		var index = inEvent.index;
		this.view.$.label.setContent("Row " + index);
		return true;
	},
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		this.nextStep();
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}
		if (this.step === 0) {
			this.view.$.list.scrollTo(0, this.view.$.list.getScrollBounds().maxTop);
		}
		else if (this.step === 1) {
			this.view.$.list.scrollTo(0, 0);
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});