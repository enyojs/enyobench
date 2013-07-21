enyo.kind({
	name: "enyoBench.ReportView",
	classes: "report-view",
	published: {
		timestamps: null,
		results: null
	},
	components: [
		{tag: "h1", content: "EnyoBench"},
		{name: "loadedFrom"},
		{kind: "enyo.Button", content: "Reload", ontap: "reloadApp"},
		{tag: "ul", components: [
			{
				kind: "enyo.Repeater",
				name: "timeRepeater",
				onSetupItem: "setupTimestamp",
				components: [
					{kind: "enyoBench.LabeledTime", name: "labeledTime"}
				]
			}
		]},
		{tag: "ul", components: [
			{
				kind: "enyo.Repeater",
				name: "resultsRepeater",
				onSetupItem: "setupResult",
				components: [
					{kind: "enyoBench.FormattedTestResult", name: "testResult"}
				]
			}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.$.loadedFrom.setContent("loaded from " + window.location.toString());
	},
	reloadApp: function() {
		window.location.reload();
	},
	timestampsChanged: function() {
		this.$.timeRepeater.setCount(this.timestamps.length);
	},
	setupTimestamp: function(inSender, inEvent) {
		var item = inEvent.item;
		var timestamp = this.timestamps[inEvent.index];
		item.$.labeledTime.setLabel(timestamp.display);
		item.$.labeledTime.setTime(timestamp.time);
		return true;
	},
	resultsChanged: function() {
		this.$.resultsRepeater.setCount(this.results.length);
	},
	setupResult: function(inSender, inEvent) {
		var item = inEvent.item;
		var result = this.results[inEvent.index];
		item.$.testResult.setLabel(result.name);
		item.$.testResult.setStartTime(result.start);
		item.$.testResult.setEndTime(result.end);
		item.$.testResult.setDuration(result.duration);
		item.$.testResult.setFps(result.fps);
		return true;
	}
});