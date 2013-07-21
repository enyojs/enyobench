/* globals formatDecimal */
enyo.kind({
	name: "enyoBench.FormattedTestResult",
	classes: "formatted-test-result",
	mixins: ["enyo.AutoBindingSupport"],
	tag: "li",
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
		{tag: "span", classes: "formatted-test-result-label", bindFrom: ".label"},
		{tag: "span", classes: "formatted-test-result-start", bindFrom: ".startTime", bindTransform: "toFixed"},
		{tag: "span", classes: "formatted-test-result-end", bindFrom: ".endTime", bindTransform: "toFixed"},
		{tag: "span", classes: "formatted-test-result-duration", bindFrom: ".duration", bindTransform: "toFixed"},
		{tag: "span", classes: "formatted-test-result-fps", bindFrom: ".fps", bindTransform: "filterNull"}
	],
	filterNull: function(inValue) {
		return (inValue == null)
			? ""
			: ", " + formatDecimal(inValue, 2) + " frames per second";
	},
	toFixed: function(inValue) {
		return formatDecimal(inValue, 2);
	}
});