enyoBench.speedKind({
	name: "enyoBench.MoonEmptyPanelAnimationBackward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Empty Panel Animation Backward",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			kind: "moon.Panels",
			name: "panels",
			pattern: "activity",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: red;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: orange;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: yellow;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: green;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: blue;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: indigo;"},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: violet;"}
			]
		}]
	}),
	handlers: {
		onPanelsPostTransitionFinished: "nextStep"
	},
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.panels = this.view.$.panels;
		this.step = 0;
		this.panels.setIndex(this.panels.getPanels().length - 1);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}

		if (this.panels.getIndex() === this.panels.getPanels().length - 1) {
			this.step = 0;
		}

		if (this.panels.getIndex() > 0) {
			this.goPrevious();
		}
		else {
			this.testComplete();
		}

		this.step++;
		return true;
	},
	goPrevious: function() {
		this.panels.previous();
	}
});