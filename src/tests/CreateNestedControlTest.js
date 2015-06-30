var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.CreateNestedControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "Nested enyo.Control Create & Destroy (x1000)",
	view: kind({
		kind: Control
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 1000; ++i) {
			var c = new Control({
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