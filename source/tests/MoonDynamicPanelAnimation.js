enyoBench.speedKind({
	name: "enyoBench.MoonDynamicPanelAnimation",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Dynamic Panel Animation",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			kind: "moon.Panels",
			name: "panels",
			pattern: "alwaysviewing",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: "enyoBench.DynamicTestPanel", style: "background: red;"}
			]
		}]
	}),
	handlers: {
		onTransitionFinish: "transitionFinish"
	},
	runTest: function() {
		this.render();
		setTimeout(this.bindSafely("firstStep"), 1000);
	},
	firstStep: function() {
		enyoBench.SpeedTest.prototype.runTest.call(this);
		this.forward();
	},
	transitionFinish: function(inSender, inEvent) {
		inEvent = inEvent || {};
		inEvent.direction = this.calcTransitionDirection(inEvent);
		
		var direction = this.calcNextDirection(inEvent),
			functionName = (direction === 1) ? "forward" : (direction === -1) ? "backward" : "testComplete";
		
		if (inEvent.direction === -1) {
			this.popPanel();
		}
		
		setTimeout(this.bindSafely(functionName), 1000);
		return true;
	},
	calcTransitionDirection: function(inEvent) {
		return (inEvent.fromIndex < inEvent.toIndex) ? 1 : (inEvent.fromIndex > inEvent.toIndex) ? -1 : 0;
	},
	calcNextDirection: function(inEvent) {
		var length = this.view.$.panels.getPanels().length;
		
		if (inEvent.direction === 1) {
			if (length < this.backgroundColors.length) {
				return 1;
			} else {
				return -1;
			}
		} else if (inEvent.direction === -1 && length > 2) {
			return -1;
		}
		
		return 0;
	},
	popPanel: function() {
		var panels = this.view.$.panels;
		panels.popPanels(panels.getPanels().length - 1);
	},
	forward: function(inSender, inEvent) {
		var panels = this.view.$.panels,
			color = this.backgroundColors[panels.getPanels().length];
		panels.pushPanel({kind: "enyoBench.DynamicTestPanel", style: "background: " + color + ";"});
	},
	backward: function() {
		var panels = this.view.$.panels;
		panels.setIndex(panels.getPanels().length - 2);
	},
	backgroundColors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
});

enyo.kind({
	name: "enyoBench.DynamicTestPanel",
	kind: "moon.Panel",
	title: "Moonstone Panel",
	classes: "moon-7h",
	components: [
		{kind: "moon.Scroller", fit: true, components: [
			{kind: "moon.ExpandablePicker", content: "Picker", noneText: "None Selected", components: [
				{content: "Option 1"},
				{content: "Option 2", active: true},
				{content: "Option 3"}
			]},
			{kind: "moon.ExpandablePicker", content: "Picker", noneText: "None Selected", components: [
				{content: "Option 1"},
				{content: "Option 2"},
				{content: "Option 3", active: true}
			]},
			{kind: "moon.ExpandablePicker", content: "Picker", noneText: "None Selected", components: [
				{content: "Option 1"},
				{content: "Option 2"},
				{content: "Option 3"}
			]},
			{kind: "moon.ExpandablePicker", content: "Picker", noneText: "None Selected", components: [
				{content: "Option 1", active: true},
				{content: "Option 2"},
				{content: "Option 3"}
			]},
			{kind: "moon.ExpandableInput", content: "Input", noneText: "No Input"},
			{kind: "moon.ExpandableInput", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
			{kind: "moon.ExpandableInput", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
			{kind: "moon.ExpandableInput", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
		]}
	]
});