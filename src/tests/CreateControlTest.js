var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control');

var
	utils = require('enyo/utils');


var CreateControlTest =  speedKind({
	name: "enyoBench.CreateControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "enyo.Control Create & Destroy (x10000)",
	view: kind({
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

var CreateNestedControlTest = speedKind({
	name: "enyoBench.CreateNestedControlTest",
	kind: "enyoBench.SpeedTest",
	testName: "Nested enyo.Control Create & Destroy (x1000)",
	view: kind({
		kind: Control
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

module.exports = {
	CreateControlTest: CreateControlTest,
	CreateNestedControlTest: CreateNestedControlTest
}