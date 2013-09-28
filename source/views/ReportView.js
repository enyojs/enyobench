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
			{
				kind: "enyo.Repeater",
				name: "timeRepeater",
				onSetupItem: "setupTimestamp",
				components: [
					{kind: "enyoBench.LabeledTime", name: "labeledTime"}
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
					kind: "enyo.DataRepeater",
					name: "resultsRepeater",
					components: [{
						kind: "enyoBench.FormattedTestResult",
						bindings: [
							{from: ".model.name", to: ".label"},
							{from: ".model.kind", to: ".href", transform: "xformKindToUrl"},
							{from: ".model.kind", to: ".title"},
							{from: ".model.start", to: ".startTime"},
							{from: ".model.end", to: ".endTime"},
							{from: ".model.duration", to: ".duration"},
							{from: ".model.fps", to: ".fps"}
						]
					}]
				}
			]}
		]}
	],
	bindings: [
		{from: ".resultsCollection", to: ".$.resultsRepeater.controller"}
	],
	resultsCollection: null,
	xformKindToUrl: function(input) {
		return "?test=" + input + this.app.reportFPS? "&fps=1" : "";
	},
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
		this.set("resultsCollection", new enyo.Collection(this.results));
	}
});