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
		{tag: "ul", defaultKind: "enyoBench.LabeledTime", components: [
			{label: "fetchStart", bindFrom: ".fetchStart", bindTo: "time"},
			{label: "enyo.js Load Start", bindFrom: ".enyoLoadStart", bindTo: "time"},
			{label: "enyo.js Load End", bindFrom: ".enyoLoadEnd", bindTo: "time"},
			{label: "app.js Load Start", bindFrom: ".appLoadStart", bindTo: "time"},
			{label: "app.js Load End", bindFrom: ".appLoadEnd", bindTo: "time"},
			{label: "domInteractive", bindFrom: ".domInteractive", bindTo: "time"},
			{label: "domContentLoadedEventStart", bindFrom: ".domContentLoadedEventStart", bindTo: "time"},
			{label: "domContentLoadedEventEnd", bindFrom: ".domContentLoadedEventEnd", bindTo: "time"},
			{label: "domComplete", bindFrom: ".domComplete", bindTo: "time"}
		]}
	]
});
