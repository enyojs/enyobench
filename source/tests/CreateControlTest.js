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

enyoBench.speedKind({
	name: "enyoBench.CreateNestedControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "Nested enyo.Control Create & Destroy (x1000)",
	view: enyo.kind({
		kind: "enyo.Control"
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 1000; ++i) {
			var c = new enyo.Control({
				components: [
					{content: "I"},
					{content: "II", components: [
						{content: "a"},
						{content: "b"},
						{content: "c", components: [
							{content: "1"},
							{content: "2"}
						]},
						{content: "d"}
					]},
					{content: "III"},
					{content: "IV"}
				]
			});
			c.destroy();
		}
		this.testComplete();
	}
});