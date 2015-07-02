var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	Component = require('enyo/Component');

var
	utils = require('enyo/utils');


var InheritanceTest = speedKind({
	name: "enyoBench.InheritanceTest",
	kind: "enyoBench.SpeedTest",
	testName: "Call 100,000 methods with 5 levels of this.inherited",
	view: Control,
	runTest: function() {
		var Kind1 = kind({
			kind: Component,
			foo: function() {
				if (this.levels !== 4) {
					throw "Wrong number of levels";
				}
			}
		});
		var Kind2 = kind({
			kind: Kind1,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind3 = kind({
			kind: Kind2,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind4 = kind({
			kind: Kind3,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind5 = kind({
			kind: Kind4,
			foo: function() { this.levels = 1; this.inherited(arguments); }
		});
		var obj = new Kind5();
		// TEST TIMING START
		this.inherited(arguments);
		for (var i = 0; i < 100000; ++i) {
			obj.foo();
		}
		this.testComplete();
		// TEST TIMING COMPLETE
		obj.destroy();
	}
});

module.exports = InheritanceTest;