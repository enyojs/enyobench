enyoBench.speedKind({
	name: "enyoBench.MoonItemRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Item Render Test",
	resetView: true,
	view: enyo.kind({
		kind: "enyo.Control",
		classes: "enyo-fit",
		style: "background: blue;",
		defaultKind: "moon.Item",
		components: [
			{content: "Item One"},
			{content: "Item Two"},
			{content: "Item Three"},
			{content: "Item Four"},
			{content: "Item Five"},
			{content: "Item Six"},
			{content: "Item Seven"},
			{content: "Item Eight"},
			{content: "Item Nine"},
			{content: "Item Ten"}
		]
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 100; ++i) {
			// test creating our view object repeatedly
			this.render();
			this.view.destroy();
		}
		this.testComplete();
	}
});