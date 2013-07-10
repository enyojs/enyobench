enyo.kind({
	name: "enyoBench.Application",
	kind: "enyo.Application",
	view: {
		kind: "enyoBench.MainView"
	},
	// called when application starts
	start: function () {
		this.inherited(arguments);
		// set initial timing data
		this.view.set("model", new enyo.Model(enyoBench.timing));
	}
});
