var
	enyo = require('enyo'),
	ilib = require('enyo-ilib'),
	moon = require('moonstone'),
	layout = require('layout'),
	webos = require('enyo-webos'),
	cordova = {},
	spotlight = require('spotlight');

var
	kind = require('enyo/kind');

var
	Control = require('enyo/Control'),
	FittableRows = require('layout/FittableRows'),
	FittableColumns = require('layout/FittableColumns'),
	Repeater = require('enyo/Repeater'),
	FittableColumnsLayout = require('layout/FittableLayout').Columns,
	FittableRowsLayout = require('layout/FittableLayout').Rows,
	moonScroller = require('moonstone/Scroller');

var
	FormattedResults = require('./FormattedTestResult'),
	LabeledTime = require('./LabeledTime');

module.exports = kind({
	name: "enyoBench.ReportView",
	kind: Control,
	classes: "report-view container-fluid enyo-selectable",
	published: {
		timestamps: null,
		results: null
	},
	layoutKind: FittableRowsLayout,
	components: [
		{classes: "page-header", components: [
			{tag: "h1", components: [
				{tag: "span", content: "EnyoBench "},
				{tag: "small", name: "loadedFrom"},
				{tag: "a", classes: "btn btn-primary", content: "Reload Page", ontap: "reloadApp"}
			]}
		]},
		{tag: "dl", classes: "dl-horizontal well", components: [
			{  layoutKind: FittableColumnsLayout,
				components: [
					{ components: [
						// TODO: Make this into its own componen that iterates through enyo.version
						{ content: "Versions", style: "font-size: larger;" },
						{ content: "Enyo: " + enyo.version },
						{ content: "Moonstone: " + moon.version },
						{ content: "Layout: " + layout.version },
						{ content: "Spotlight: " + spotlight.version },
						{ content: "Enyo-iLib: " + ilib.enyo.version },
						{ content: "Enyo-cordova: " + cordova.version },
						{ content: "Enyo-webos: " + webos.version }
					]},
					{
						kind: Repeater,
						name: "timeRepeater",
						onSetupItem: "setupTimestamp",
						fit: true,
						components: [
							{kind: LabeledTime, name: "labeledTime"}
						]
					}
				]
			}
		]},
		{tag: "dl", classes: "dl-horizontal well", fit: true, components: [
			{kind: moonScroller, classes: "enyo-fit", components: [
				{
					kind: FormattedResults,
					label: "Run all benchmarks",
					href: "?test=*"
				},
				{
					kind: Repeater,
					name: "resultsRepeater",
					onSetupItem: "setupResult",
					components: [
						{kind: FormattedResults, name: "testResult"}
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
		item.$.testResult.setLabel(result.testName);
		item.$.testResult.setHref("?test=" + result.name + (this.app.reportFPS? "&fps=1" : ""));
		item.$.testResult.setTitle(result.name);
		item.$.testResult.setStartTime(result.start);
		item.$.testResult.setEndTime(result.end);
		item.$.testResult.setDuration(result.duration);
		item.$.testResult.setFps(result.fps);
		item.$.testResult.startNotifications();
		return true;
	}
});
