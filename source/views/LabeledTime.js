/* globals formatDecimal */
enyo.kind({
	name: "enyoBench.LabeledTime",
	mixins: ["enyo.AutoBindingSupport"],
	tag: null,
	published: {
		//* string to use as time label
		label: "",
		//* Date.now()-based value for this point in time
		time: 0
	},
	components: [
		{tag: "dt", classes: "labeled-time-label", bindFrom: ".label"},
		{tag: "dd", classes: "labeled-time-data", bindFrom: ".time", bindTransform: "toFixedMS"}
	],
	toFixedMS: function(inValue) {
		return formatDecimal(inValue, 2) + " ms";
	}
});