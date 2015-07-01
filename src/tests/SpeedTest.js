var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	ViewController = require('enyo/ViewController');

/* global FPS:true, console: true */

// this is an abstract base-kind for tests in EnyoBench,
// implementing the boilerplate

// set global test list that we'll manually add all test kinds into
enyoBench.tests = [];

var SpeedTest = require('./SpeedTestKind');

module.exports = function(inProps) {
	
	if (!inProps.disabled) {
		var index = enyoBench.tests.push({
			kind: SpeedTest,
			name: inProps.name,
			testName: inProps.testName
		});
		enyoBench.tests[inProps.testName] = enyoBench.tests[index];
		if(typeof inProps.kind == 'string') {
			inProps.kind = SpeedTest;
		} 
		return kind(inProps);
	}
};