enyo.kind({
	name: "enyoBench.Application",
	kind: "enyo.Application",
	view: {
		kind: "enyoBench.MainView"
	},
	// called when application starts
	start: function () {
		this.inherited(arguments);

		// pull in timing data from browser
		enyo.mixin(enyoBench.timing, window.performance.timing);

		// set initial timing data
		this.view.set("model", new enyo.Model(enyoBench.timing));
	}
});
