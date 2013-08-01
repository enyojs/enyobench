enyo.kind({
	name: "enyoBench.MoonEmptyPanelRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Empty Panel Render",
	view: enyo.kind({
		kind: "moon.Panels",
		pattern: "activity",
		components: [{
			kind: "moon.Panel",
			title: "Moonstone Panel"
		}]
	}),
	render: function() {
		this.inherited(arguments);
		this.testComplete();
	},
	runTest: function() {
		this.inherited(arguments);
		this.render();
	}
});