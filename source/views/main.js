enyo.kind({
	name: "enyoBench.LabeledTime",
	classes: "main-labeled-time",
	mixins: ["enyo.AutoBindingSupport"],
	tag: "li",
	published: {
		//* string to use as time label
		label: null,
		//* Date.now()-based value for this point in time
		time: 0
	},
	components: [
		{tag: "span", classes: "main-labeled-time-label", bindFrom: ".label"},
		{tag: "span", classes: "main-labeled-time-data", bindFrom: ".time", bindTransform: "offsetTimeForDisplay"}
	],
	offsetTimeForDisplay: function(inValue) {
		// show times relative to start of loading of page
		return inValue - window.performance.timing.navigationStart;
	}
});

enyo.kind({
	name: "enyoBench.MainView",
	classes: "main-view",
	mixins: ["enyo.AutoBindingSupport"],
	components: [
		{tag: "h1", content: "EnyoBench"},
		{tag: "ul",	components: [
			{kind: "enyoBench.LabeledTime", label: "Enyo Start", bindFrom: ".enyoLoadStart", bindTo: "time"},
			{kind: "enyoBench.LabeledTime", label: "Enyo Stop",  bindFrom: ".enyoLoadEnd",   bindTo: "time"},
			{kind: "enyoBench.LabeledTime", label: "App Start",  bindFrom: ".appLoadStart",  bindTo: "time"},
			{kind: "enyoBench.LabeledTime", label: "App End",    bindFrom: ".appLoadEnd",    bindTo: "time"}
		]}
	]
});
