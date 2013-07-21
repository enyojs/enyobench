/* global app: true */
new enyoBench.Application({name: "app"});

enyo.ready(function () {
	app.runTests();
});
