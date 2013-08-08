enyo.kind({
	name: "enyoBench.DispatchTest",
	kind: "enyoBench.SpeedTest",
	testName: "Dispatch 500 Events Through 100 Components",
	view: "enyo.Control",
	runTest: function() {
		var dispatchTestItem = enyo.kind({
			kind: "enyo.Component",
			handlers: {
				onTestDispatch: "handleTestDispatch"
			},
			handleTestDispatch: function(inSender, inEvent) {
				inEvent.numViewers++;
				// explicitly return undefined to allow event to continue
			}
		});
		var top = enyo.singleton({
			kind: dispatchTestItem,
			receivedEvents: 0,
			handleTestDispatch: function(inSender, inEvent) {
				if (inEvent.numViewers != 100) {
					throw "Invalid Viewer Count";
				}
				this.receivedEvents++;
				return true;
			}
		});
		var current, i;
		for (current = top, i = 0; i < 100; ++i) {
			current = current.createComponent({kind: dispatchTestItem});
		}
		var bottom = current;
		// TEST TIMING START
		this.inherited(arguments);
		for (i = 0; i < 500; ++i) {
			bottom.bubble("onTestDispatch", {numViewers: 0}, bottom);
		}
		if (top.receivedEvents != 500) {
			throw "Wrong number of events";
		}
		this.testComplete();
		// TEST TIMING COMPLETE
		top.destroy();
	}
});

enyoBench.tests.push({
	kind: "enyoBench.DispatchTest",
	name: "Dispatch 500 Events Through 100 Components"
});