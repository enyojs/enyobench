var
	kind = require('enyo/kind');


/* globals formatDecimal */
module.exports = kind({
	name: "enyoBench.LabeledTime",
	tag: null,
	published: {
		//* string to use as time label
		label: "",
		//* Date.now()-based value for this point in time
		time: 0
	},
	components: [
		{tag: "dt", name: "label", classes: "labeled-time-label"},
		{tag: "dd", name: "time", classes: "labeled-time-data"}
	],
	bindings: [
		{from: ".label", to: ".$.label.content" },
		{from: ".time",  to: ".$.time.content", transform: "toFixedMS"}
	],
	toFixedMS: function(inValue) {
		if(typeof inValue != 'undefined') {
			inValue = formatDecimal(inValue, 2);
		}
		return inValue + " ms";
	}
});