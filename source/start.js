/* global app: true */
new enyoBench.Application({name: "app", renderOnStart: false});

enyo.ready(function () {
	// some timing values aren't ready until we can run.
	app.updateTimings();
	app.render();
});
