enyoBench.speedKind({
	name: "enyoBench.InheritanceTest",
	kind: "enyoBench.SpeedTest",
	testName: "Call 100,000 methods with 5 levels of this.inherited",
	view: "enyo.Control",
	runTest: function() {
		var Kind1 = enyo.kind({
			kind: "enyo.Component",
			foo: function() {
				if (this.levels !== 4) {
					throw "Wrong number of levels";
				}
			}
		});
		var Kind2 = enyo.kind({
			kind: Kind1,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind3 = enyo.kind({
			kind: Kind2,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind4 = enyo.kind({
			kind: Kind3,
			foo: function() { this.levels++; this.inherited(arguments); }
		});
		var Kind5 = enyo.kind({
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

enyoBench.speedKind({
	name: "enyoBench.SuperInheritanceTest",
	kind: "enyoBench.SpeedTest",
	testName: "Call 100,000 methods with 5 levels of sup.apply",
	view: "enyo.Control",
	runTest: function() {
		var Kind1 = enyo.kind({
			kind: "enyo.Component",
			foo: function() {
				if (this.levels !== 4) {
					throw "Wrong number of levels";
				}
			}
		});
		var Kind2 = enyo.kind({
			kind: Kind1,
			foo: enyo.inherit(function(sup) {
				return function() {
					this.levels++;
					sup.apply(this, arguments);
				};
			})
		});
		var Kind3 = enyo.kind({
			kind: Kind2,
			foo: enyo.inherit(function(sup) {
				return function() {
					this.levels++;
					sup.apply(this, arguments);
				};
			})
		});
		var Kind4 = enyo.kind({
			kind: Kind3,
			foo: enyo.inherit(function(sup) {
				return function() {
					this.levels++;
					sup.apply(this, arguments);
				};
			})
		});
		var Kind5 = enyo.kind({
			kind: Kind4,
			foo: enyo.inherit(function(sup) {
				return function() {
					this.levels = 1;
					sup.apply(this, arguments);
				};
			})
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