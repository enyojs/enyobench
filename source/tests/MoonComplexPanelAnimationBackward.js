enyo.kind({
	name: "enyoBench.MoonComplexPanelAnimationBackward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Complex Panel Animation Backward",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			kind: "moon.Panels",
			name: "panels",
			pattern: "activity",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: red;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: orange;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: yellow;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: green;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: blue;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: indigo;", components: [
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
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", style: "background: violet;", components: [
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
				]}
			]
		}]
	}),
	handlers: {
		onPanelsPostTransitionFinished: "nextStep"
	},
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.panels = this.view.$.panels;
		this.step = 0;
		this.panels.setIndex(this.panels.getPanels().length - 1);
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}

		if (this.panels.getIndex() === this.panels.getPanels().length - 1) {
			this.step = 0;
		}

		if (this.panels.getIndex() > 0) {
			this.goPrevious();
		}
		else {
			this.testComplete();
		}

		this.step++;
		return true;
	},
	goPrevious: function() {
		this.panels.previous();
	}
});