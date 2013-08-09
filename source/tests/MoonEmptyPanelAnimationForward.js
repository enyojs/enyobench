enyoBench.speedKind({
	name: "enyoBench.MoonEmptyPanelAnimationForward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Empty Panel Animation Forward",
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
		onTransitionFinish: "nextStep"
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
		if (this.step < this.view.$.panels.getPanels().length - 1) {
			this.view.$.panels.next();
		}
		else {
			this.testComplete();
		}
		this.step++;
		return true;
	}
});