/* globals formatDecimal */
enyo.kind({
	name: "enyoBench.FormattedTestResult",
	classes: "formatted-test-result",
	tag: null,
	published: {
		//* string to use as label for test
		label: "",
		//* URL to link from label
		href: "",
		//* title attribute for link
		title: "",
		//* Date.now()-based value for when the test started
		startTime: 0,
		//* Date.now()-based value for when the test ended
		endTime: 0,
		//* how long the test took in ms
		duration: null,
		//* FPS during the test (can be null for n/a)
		fps: null
	},
	components: [
		{
			tag: "dt",
			components: [
				{kind: "enyo.Anchor", name: "testName"}
			]
		},
		{tag: "dd", name: "results"}
	],
	bindings: [
		{from: ".label", to: ".$.testName.content"},
		{from: ".title", to: ".$.testName.title"},
		{from: ".href", to: ".$.testName.href"},
		{from: ".results", to: ".$.results.content"}
	],
	results: enyo.computed(function() {
		var results = "";
		if (this.startTime != null && this.endTime != null && this.duration != null) {
			results =
				"from " + formatDecimal(this.startTime, 2) + " ms " +
				"to " + formatDecimal(this.endTime, 2) + " ms " +
				"(" + formatDecimal(this.duration) + " ms)";
		}
		if (this.fps != null) {
			if (results !== "") {
				results += ", ";
			}
			results += formatDecimal(this.fps, 2) + " frames per second";
		}
		// add a non-breaking space at end to avoid empty content
		results += "\xA0";
		return results;
	}, "startTime", "endTime", "duration", "fps"),
	gotoHref: function(inSender, inEvent) {
		if (this.href) {
			window.location = this.href;
		}
		return true;
	}
});