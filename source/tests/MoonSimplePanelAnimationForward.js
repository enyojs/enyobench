enyoBench.speedKind({
	name: "enyoBench.MoonSimplePanelAnimationForward",
	kind: "enyoBench.SpeedTest",
	testName: "Moonstone Simple Panel Animation Forward",
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [{
			kind: "moon.Panels",
			name: "panels",
			pattern: "activity",
			fit: true,
			realtimeFit: true,
			components: [
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: red;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: orange;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: yellow;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: green;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: blue;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: indigo;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]},
				{kind: "moon.Panel", title: "Moonstone Panel", classes: "moon-7h", style: "background: violet;", components: [
					{kind: "moon.Scroller", fit: true, components: [
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.ProgressBar", progress: 50},
						{kind: "moon.ProgressBar", progress: 25},
						{kind: "moon.Input", content: "Input", noneText: "No Input"},
						{kind: "moon.Input", content: "Input with Placeholder", noneText: "No Input", placeholder: "Placeholder"},
						{kind: "moon.Input", content: "Input with Value", noneText: "No Input", placeholder: "Placeholder", value: "Text"},
						{kind: "moon.Input", content: "Disabled Input", noneText: "No Input", disabled:true, value: "I am disabled."}
					]}
				]}
			]
		}]
	}),
	handlers: {
		onTransitionFinish: "nextStep"
	},
	runTest: function() {
		this.render();
		this.step = 0;
		setTimeout(this.bindSafely("firstStep"), 1000);
	},
	firstStep: function() {
		enyoBench.SpeedTest.prototype.runTest.call(this);
		this.nextStep();
	},
	nextStep: function(inSender, inEvent) {
		// exit early if we get event before test starts
		if (!enyo.exists(this.step)) {
			return true;
		}

		if (this.step < this.view.$.panels.getPanels().length - 1) {
			this.view.$.panels.next();
		}
		else {
			this.testComplete();
		}

		this.step++;
		return true;
	}
});