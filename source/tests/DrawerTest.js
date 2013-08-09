enyoBench.speedKind({
	name: "enyoBench.DrawerTest",
	kind: "enyoBench.SpeedTest",
	testName: "Drawer Animation",
	handlers:{
		//ontap:"nextStep"
	},
	view: enyo.kind({
		kind: "enyo.FittableRows",
		components: [
			{kind: "enyo.Spotlight"},
			{
				name: "drawers",
				kind: "moon.Drawers",
				drawers:[
					{
						name: "searchDrawer",
						handle: {content: "Full drawer"},
						components: [
							{kind: "moon.Header", title: "Full Drawer"},
							{kind: "moon.Item", content: "Item One"},
							{kind: "moon.Item", content: "Item Two"}
						]
					}
				],
				components: [
					{
						name: "panels",
						kind: "moon.Panels",
						classes: "enyo-fit",
						components: [
							{title: "First", components: [
								{kind: "moon.Item", content: "Item One"},
								{kind: "moon.Item", content: "Item Two"},
								{kind: "moon.Item", content: "Item Three"},
								{kind: "moon.Item", content: "Item Four"},
								{kind: "moon.Item", content: "Item Five"}
							]},
							{title: "Second", components: [
								{kind: "moon.Item", content: "Item One"},
								{kind: "moon.Item", content: "Item Two"},
								{kind: "moon.Item", content: "Item Three"},
								{kind: "moon.Item", content: "Item Four"},
								{kind: "moon.Item", content: "Item Five"}
							]}
						]
					}
				]
			}
		]
	}),
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.step = 0;
		setTimeout(enyo.bind(this, "nextStep"), 1000);
	},
	nextStep: function(inSender, inEvent) {
		// ignore early call to handler from panel setup
		if (!enyo.exists(this.step)) {
			return;
		}
		if(this.step >= 10){
			this.testComplete();
		}
		else if (this.step % 2 == 0) {
			this.view.$.searchDrawer.setOpen(true);
			setTimeout(enyo.bind(this, "nextStep"), 500);
		}
		else {
			this.view.$.searchDrawer.setOpen(false);
			setTimeout(enyo.bind(this, "nextStep"), 500);
		}
		this.step++;	
		return true;
	}
});