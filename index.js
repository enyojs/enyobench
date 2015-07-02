var 
	app = require('./src/apps/app');

var 
	ready = require('enyo/ready');

ready(function(){
	var App = new app();
	
	App.renderInto(document.body);
});