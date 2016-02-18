var 
	app = require('./src/apps/app');

var 
	ready = require('enyo/ready');

ready(function(){
	enyoBench.timing.enyoReady = now();
	var App = new app();
	App.renderInto(document.body);
});

