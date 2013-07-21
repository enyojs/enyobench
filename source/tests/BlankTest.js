// simple test that shows a mostly blank page for 1 second. used to calibrate
// system FPS measurement by testing the browser at rest.
enyo.kind({
	name: "enyoBench.BlankTest",
	kind: "enyoBench.SpeedTest",
	testName: "Baseline FPS (Blank Page)",
	view: enyo.kind({
		components: [
			{tag: "h1", content: "Calibrating FPS Counter"}
		]
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		setTimeout(enyo.bind(this, this.testComplete), 1000);
	}
});