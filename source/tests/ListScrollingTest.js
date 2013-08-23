enyoBench.speedKind({
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
		}],
		setupItem: function(inSender, inEvent) {
			var index = inEvent.index;
			this.$.label.setContent("Row " + index);
			return true;
		}
	}),
	handlers: {
		onScrollStop: "nextStep"
	},
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

enyoBench.speedKind({
	name: "enyoBench.NarrowListScrollingTest",
	kind: "enyoBench.ListScrollingTest",
	testName: "Narrow Vertical List Scrolling (1000 items)",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		style: "width: 320px;",
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
		}],
		setupItem: function(inSender, inEvent) {
			var index = inEvent.index;
			this.$.label.setContent("Row " + index);
			return true;
		}
	})
});

enyoBench.speedKind({
	name: "enyoBench.StaticScrollingTest",
	kind: "enyoBench.ListScrollingTest",
	testName: "Static Content Scrolling (1000 items)",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			name: "list",
			kind: "enyo.Scroller",
			touch: true,
			fit: true,
			components: [{
				kind: "enyo.Repeater",
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