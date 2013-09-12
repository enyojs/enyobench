enyoBench.speedKind({
	name: "enyoBench.CreateControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "enyo.Control Create & Destroy (x10000)",
	view: enyo.kind({
		kind: "enyo.Control"
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 10000; ++i) {
			var c = new enyo.Control();
			c.destroy();
		}
		this.testComplete();
	}
});