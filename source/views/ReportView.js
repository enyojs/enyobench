enyo.kind({
	name: "enyoBench.ReportView",
	classes: "report-view container-fluid enyo-selectable",
	published: {
		timestamps: null,
		results: null
	},
	layoutKind: "FittableRowsLayout",
	components: [
		{classes: "page-header", components: [
			{tag: "h1", components: [
				{tag: "span", content: "EnyoBench "},
				{tag: "small", name: "loadedFrom"},
				{tag: "a", classes: "btn btn-primary", content: "Reload Page", ontap: "reloadApp"}
			]}
		]},
		{tag: "dl", classes: "dl-horizontal well", components: [
			{ layoutKind: "FittableColumnsLayout",
				components: [
					{ components: [
						// TODO: Make this into its own componen that iterates through enyo.version
						{ content: "Versions", style: "font-size: larger;" },
						{ content: "Enyo: " + enyo.version.enyo },
						{ content: "Moonstone: " + enyo.version.moonstone },
						{ content: "Layout: " + enyo.version.layout },
						{ content: "Spotlight: " + enyo.version.spotlight },
						{ content: "Enyo-iLib: " + enyo.version['enyo-ilib'] },
						{ content: "Enyo-cordova: " + enyo.version['enyo-cordova'] },
						{ content: "Enyo-webos: " + enyo.version['enyo-webos'] }
					]},
					{
						kind: "enyo.Repeater",
						name: "timeRepeater",
						onSetupItem: "setupTimestamp",
						fit: true,
						components: [
							{kind: "enyoBench.LabeledTime", name: "labeledTime"}
						]
					}
				]
			}
		]},
		{tag: "dl", classes: "dl-horizontal well", fit: true, components: [
			{kind: "moon.Scroller", classes: "enyo-fit", components: [
				{
					kind: "enyoBench.FormattedTestResult",
					label: "Run all benchmarks",
					href: "?test=*"
				},
				{
					kind: "enyo.Repeater",
					name: "resultsRepeater",
					onSetupItem: "setupResult",
					components: [
						{kind: "enyoBench.FormattedTestResult", name: "testResult"}
					]
				}
			]}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.$.loadedFrom.setContent("loaded from " + window.location.toString() + " ");
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
		item.$.labeledTime.stopNotifications();
		item.$.labeledTime.setLabel(timestamp.display);
		item.$.labeledTime.setTime(timestamp.time);
		item.$.labeledTime.startNotifications();
		return true;
	},
	resultsChanged: function() {
		this.$.resultsRepeater.setCount(this.results.length);
	},
	setupResult: function(inSender, inEvent) {
		var item = inEvent.item;
		var result = this.results[inEvent.index];
		item.$.testResult.stopNotifications();
		item.$.testResult.setLabel(result.name);
		item.$.testResult.setHref("?test=" + result.kind + (this.app.reportFPS? "&fps=1" : ""));
		item.$.testResult.setTitle(result.kind);
		item.$.testResult.setStartTime(result.start);
		item.$.testResult.setEndTime(result.end);
		item.$.testResult.setDuration(result.duration);
		item.$.testResult.setFps(result.fps);
		item.$.testResult.startNotifications();
		return true;
	}
});
