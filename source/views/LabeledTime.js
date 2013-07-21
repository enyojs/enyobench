/* globals formatDecimal */
enyo.kind({
	name: "enyoBench.LabeledTime",
	classes: "labeled-time",
	mixins: ["enyo.AutoBindingSupport"],
	tag: "li",
	published: {
		//* string to use as time label
		label: "",
		//* Date.now()-based value for this point in time
		time: 0
	},
	components: [
		{tag: "span", classes: "labeled-time-label", bindFrom: ".label"},
		{tag: "span", classes: "labeled-time-data", bindFrom: ".time", bindTransform: "toFixed"}
	],
	toFixed: function(inValue) {
		return formatDecimal(inValue, 2);
	}
});