var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control');

var
	utils = require('enyo/utils');

module.exports = speedKind({
	name: "enyoBench.CreateControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "enyo.Control Create & Destroy (x10000)",
	view: kind({
		kind: Control
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 10000; ++i) {
			var c = new Control();
			c.destroy();
		}
		this.testComplete();
	}
});