var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');


var
	Application = require('enyo/Application');

var
	Spotlight = require('spotlight');

var 
	ReportView = require('../views/ReportView');


require('../ext/fps');
require('../ext/numberFormat');

var 
	tests = {
		'enyoBench.BlankTest' : require('../tests/BlankTest'),
		'enyoBench.CreateControlTest' : require('../tests/CreateControlTest'),
		'enyoBench.CreateNestedControlTest' : require('../tests/CreateNestedControlTest'),
		'enyoBench.DataGridListScrollingTest' : require('../tests/DataGridListScrollingTest'),
		'enyoBench.DataListScrollingTest' : require('../tests/DataListScrollingTest'),
		'enyoBench.DispatchTest' : require('../tests/DispatchTest'),
		'enyoBench.DrawerTest' : require('../tests/DrawerTest'),
		'enyoBench.InheritanceTest' : require('../tests/InheritanceTest'),
		'enyoBench.SuperInheritanceTest' : require('../tests/InheritanceSuperTest'),
		'enyoBench.ListScrollingTest' : require('../tests/ListScrollingTest'),
		'enyoBench.NarrowListScrollingTest' : require('../tests/ListScrollingNarrowTest'),
		'enyoBench.StaticListScrollingTest' : require('../tests/ListScrollingStaticTest'),
		'enyoBench.MoonComplexPanelAnimationBackward' : require('../tests/MoonComplexPanelAnimationBackward'),
		'enyoBench.MoonComplexPanelAnimationForward' : require('../tests/MoonComplexPanelAnimationForward'),
		'enyoBench.MoonComplexPanelRenderTest' : require('../tests/MoonComplexPanelRenderTest'),
		'enyoBench.MoonDynamicPanelAnimation' : require('../tests/MoonDynamicPanelAnimation'),
		'enyoBench.MoonEmptyPanelAnimationBackward' : require('../tests/MoonEmptyPanelAnimationBackward'),
		'enyoBench.MoonEmptyPanelAnimationForward' : require('../tests/MoonEmptyPanelAnimationForward'),
		'enyoBench.MoonItemRenderTest' : require('../tests/MoonItemRenderTest'),
		'enyoBench.MoonDataListScrollingTest' : require('../tests/MoonListScrollingTest'),
		'enyoBench.NarrowMoonDataListScrollingTest' : require('../tests/MoonListNarrowScrollingTest'),
		'enyoBench.StaticMoonDataListScrollingTest' : require('../tests/MoonListStaticScrollingTest'),
		'enyoBench.MoonEmptyPanelRenderTest' : require('../tests/MoonEmptyPanelRenderTest'),
		'enyoBench.MoonSimplePanelAnimationForward' : require('../tests/MoonSimplePanelAnimationForward'),
		'enyoBench.PanelTest' : require('../tests/PanelTest'),
		'enyoBench.RotatingImageTest' : require('../tests/RotatingImageTest')
	};

var
	runTests = []

/*
	test protocol

	test system creates a new test instance using createComponent, then calls runTest() on it.
	At some point in the future, runner gets reportResults event from the test, then uses
	that to destroy the test and start the next one.  When no tests remain, all reports
	are shown on screen.
*/

module.exports = kind({
	kind: Application,
	view: ReportView,
	reportFPS: false,
	create: function(){
		this.inherited(arguments);
		this.results = [];
		
		//get tests
		if (window.location.search) { 
			
			var matches = window.location.search.match(/[?&]test=(\*?)([\w.]*)(\*?)(&|$)/);
			if (matches) {
				
				if(matches[2] != "*") {
					var test = tests[matches[2]];
					this.createComponent({
						kind: test,
						name: "test",
						key: matches[2],
						onReportResults: "processTestResults",
						reportFPS: this.reportFPS
					});

					this.$.test.runTest();
				}
				
			}
			
		} else {
			
			this.results = [];
			for (var key in tests) {
			  if (tests.hasOwnProperty(key)) {
				  
				var test = tests[key];
				  
				this.createComponent({
						kind: test,
						name: "test",
						key: key,
						onReportResults: "processTestResults",
						reportFPS: this.reportFPS
				});


				this.$.test.runTest();
			  }
			}
			
		}
		
	},
	runNextTest : function(){
		this.reportFullResults();
	},
	processTestResults: function(inSender, inEvent) {
		this.results.push(inEvent);
		
		if (window.webOS && window.webOS.info) {
			window.webOS.info("TESTRESULT", {
				test: inEvent.name,
				duration: inEvent.duration,
				start: inEvent.start,
				end: inEvent.end
			}, "");
		}
		utils.asyncMethod(this, this.runNextTest);
		return true;
	},		
	runTests: function(){
		
	},
	reportFullResults: function(){
		this.view.set('results', this.results);
		
			Spotlight.enablePointerMode();
		
			this.view = new ReportView();
			this.view.app = this;

			//sets the results, and also the test list is derived from this
			this.view.setResults(this.results);

			//render the view
			this.render();
	}
});
//
//module.exports = kind({
//	name: "enyoBench.Application",
//	kind: Application,
//	view: {
//		kind: ReportView
//	},
//	renderOnStart: false,
//	filter: /MATCH NOTHING/,
//	reportFPS: false,
//	create: function() {
//		this.inherited(arguments);
//		// look at window URL query to refine test list
//		if (window.location.search) {
//			var matches = window.location.search.match(/[?&]test=(\*?)([\w.]*)(\*?)(&|$)/);
//			
//			if (matches) {
//				runTests.push(tests[matches[2]]);
//				
//				if(matches[2] == "*") {
//					
//					runTest.push(tests['enyoBench.BlankTest']);	
//					runTest.push(tests['enyoBench.CreateControlTest']);	
//				}
//				
//			}
//			this.reportFPS = !!window.location.search.match(/[?&]fps=1(&|$)/);
//		} else  {
//			
//			runTests.push(tests['enyoBench.BlankTest']);	
//			runTests.push(tests['enyoBench.CreateControlTest']);	
//		}		
//	},
//	// run all of the tests; when done, render the results
//	runTests: function() {
//		
//		Spotlight.disablePointerMode();
//		this.testResults = [];
//		this.currentTestIndex = 0;
//		utils.asyncMethod(this, this.runNextTest);
//	},
//	// called asynchronously to process the next test
//	runNextTest: function() {
//		
//		// destroy any existing test instance
//		if (this.$.test) {
//			try {	// Patch for ENYO-354
//				this.$.test.destroy();
//			} catch(err) {
//				
//			}
//		}
//		
//		// stop running if there are no tests left
//		if (runTests.length < this.currentTestIndex) {
//			this.reportFullResults();
//		} else {
//			var test = runTests[this.currentTestIndex];
//			
//			console.log(test);
//			
//			this.createComponent({
//				kind: test,
//				name: "test",
//				onReportResults: "processTestResults",
//				reportFPS: this.reportFPS
//			});
//			
//			this.$.test.runTest();
//		}
//		
//		++this.currentTestIndex
//	},
//	processTestResults: function(inSender, inEvent) {
//		console.log(inEvent);
//		
//		this.testResults.push(inEvent);
//		
//		if (window.webOS && window.webOS.info) {
//			window.webOS.info("TESTRESULT", {
//				test: inEvent.name,
//				duration: inEvent.duration,
//				start: inEvent.start,
//				end: inEvent.end
//			}, "");
//		}
//		utils.asyncMethod(this, this.runNextTest);
//		return true;
//	},
//	
//	// enyoBench always gathers startup time separately from
//	// the tests that it runs.  This needs to run before the
//	// report is shown, but after any test rendering is complete.
//	updateTimings: function() {
//		var perfTiming = window.performance.timing;
//		var base = perfTiming.navigationStart;
//		var enyoTiming = enyoBench.timing;
//		this.timestamps = [
//			{ display: "fetchStart",                 time: perfTiming.fetchStart - base },
//			{ display: "enyo.js Load Start",         time: enyoTiming.enyoLoadStart },
//			{ display: "enyo.js Load End",           time: enyoTiming.enyoLoadEnd },
//			{ display: "app.js Load Start",          time: enyoTiming.appLoadStart },
//			{ display: "app.js Load End",            time: enyoTiming.appLoadEnd },
//			{ display: "domInteractive",             time: perfTiming.domInteractive - base },
//			{ display: "domContentLoadedEventStart", time: perfTiming.domContentLoadedEventStart - base },
//			{ display: "domContentLoadedEventEnd",   time: perfTiming.domContentLoadedEventEnd - base },
//			{ display: "domComplete",                time: perfTiming.domComplete - base }
//		];
//	},
//	// run after all tests complete, finally renders the main view
//	reportFullResults: function() {
//	
//		Spotlight.enablePointerMode();
//		this.updateTimings();
//		
//		//needed to add this after moving to enyo modules
//		this.view = new ReportView();
//		
//		//sets the timestamps on the right side of the summary
//		this.view.setTimestamps(this.timestamps);
//		
//		console.log(this.testResults);
//		
//		//sets the results, and also the test list is derived from this
//		this.view.setResults(this.testResults);
//		
//		//render the view
//		this.render();
//	}
//});
