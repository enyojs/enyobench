enyoBench.speedKind({
	name: "enyoBench.MoonComplexPanelRenderTest",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Complex Panel Render",
	resetView: true,
	view: enyo.kind({
		kind: "moon.Panels",
		pattern: "activity",
		components: [{
			kind: "moon.Panel",
			title: "Moonstone Panel",
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
		}]
	}),
	runTest: function() {
		this.inherited(arguments);
		for (var i = 0; i < 20; ++i) {
			// test creating our view object repeatedly
			this.render();
			this.view.destroy();
		}
		this.testComplete();
	}
});