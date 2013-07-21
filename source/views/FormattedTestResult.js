/* globals formatDecimal */
enyo.kind({
	name: "enyoBench.FormattedTestResult",
	classes: "formatted-test-result",
	mixins: ["enyo.AutoBindingSupport"],
	tag: null,
	published: {
		//* string to use as label for test
		label: "",
		//* Date.now()-based value for when the test started
		startTime: 0,
		//* Date.now()-based value for when the test ended
		endTime: 0,
		//* how long the test took in ms
		duration: 0,
		//* FPS during the test (can be null for n/a)
		fps: 0
	},
	components: [
		{tag: "dt", classes: "formatted-test-result-label", bindFrom: ".label"},
		{tag: "dd", components: [
			{tag: "span", content: "from "},
			{tag: "span", bindFrom: ".startTime", bindTransform: "toFixedMS"},
			{tag: "span", content: " to "},
			{tag: "span", bindFrom: ".endTime", bindTransform: "toFixedMS"},
			{tag: "span", content: " ("},
			{tag: "span", bindFrom: ".duration", bindTransform: "toFixedMS"},
			{tag: "span", content: ")"},
			{tag: "span", bindFrom: ".fps", bindTransform: "toFPS"}
		]}
	],
	toFPS: function(inValue) {
		return (inValue == null)
			? ""
			: ", " + formatDecimal(inValue, 2) + " frames per second";
	},
	toFixedMS: function(inValue) {
		return formatDecimal(inValue, 2) + " ms";
	}
});