/*
	test protocol

	test system creates a new test instance using createComponent, then calls runTest() on it
*/

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
		'enyoBench.PanelTest' : require('../tests/PanelTest'),
		'enyoBench.DispatchTest' : require('../tests/DispatchTest'),
		'enyoBench.InheritanceTest' : require('../tests/InheritanceTest'),
		'enyoBench.SuperInheritanceTest' : require('../tests/InheritanceSuperTest'),
		'enyoBench.CreateControlTest' : require('../tests/CreateControlTest'),
		'enyoBench.ListScrollingTest' : require('../tests/ListScrollingTest'),
		'enyoBench.NarrowListScrollingTest' : require('../tests/ListScrollingNarrowTest'),
		'enyoBench.StaticScrollingTest' : require('../tests/ListScrollingStaticTest'),
		'enyoBench.MoonListScrollingTest' : require('../tests/MoonListScrollingTest'),
		'enyoBench.NarrowMoonListScrollingTest' : require('../tests/MoonListNarrowScrollingTest'),
		'enyoBench.StaticMoonScrollingTest' : require('../tests/MoonListStaticScrollingTest'),
		'enyoBench.DataGridListScrollingTest' : require('../tests/DataGridListScrollingTest'),
		'enyoBench.DataListScrollingTest' : require('../tests/DataListScrollingTest'),
		'enyoBench.MoonEmptyPanelRenderTest' : require('../tests/MoonEmptyPanelRenderTest'),
		'enyoBench.MoonComplexPanelRenderTest' : require('../tests/MoonComplexPanelRenderTest'),
		'enyoBench.MoonEmptyPanelAnimationForward' : require('../tests/MoonEmptyPanelAnimationForward'),
		'enyoBench.MoonEmptyPanelAnimationBackward' : require('../tests/MoonEmptyPanelAnimationBackward'),
		'enyoBench.MoonSimplePanelAnimationForward' : require('../tests/MoonSimplePanelAnimationForward'),
		'enyoBench.MoonComplexPanelAnimationForward' : require('../tests/MoonComplexPanelAnimationForward'),
		'enyoBench.MoonComplexPanelAnimationBackward' : require('../tests/MoonComplexPanelAnimationBackward'),
		'enyoBench.MoonDynamicPanelAnimation' : require('../tests/MoonDynamicPanelAnimation'),
		'enyoBench.DrawerTest' : require('../tests/DrawerTest'),
		'enyoBench.RotatingImageTest' : require('../tests/RotatingImageTest'),
		'enyoBench.MoonItemRenderTest' : require('../tests/MoonItemRenderTest'),
		'enyoBench.CreateNestedControlTest' : require('../tests/CreateNestedControlTest')
	};

var
	runTests = [];

module.exports = kind({
	kind: Application,
	view: ReportView,
	reportFPS: true,
	create: function(){
		this.inherited(arguments);
		this.results = [];
		
		//get tests
		if (window.location.search) { 
			
			var matches = window.location.search.match(/[?&]test=(\*?)([\w.]*)(\*?)(&|$)/);
			if (matches) {
				
				if(matches[1] != '*' && matches[2] != '*') {
					
					var test = tests[matches[2]];
					this.createComponent({
						kind: test,
						name: "test",
						key: matches[2],
						onReportResults: "processTestResults",
						reportFPS: this.reportFPS
					});

					this.$.test.runTest();
					
				} else if(matches[1] == '*') {
					//run all tests
					this.results = [];
					for (var key in tests) {
					  if (tests.hasOwnProperty(key)) {
						  
						var test = tests[key];
						
						test.key = key;
						runTests.push(test);
						  
					  }
					}
					
					this.runNextTest();
				}
			}
			
		} else {
			//list all tests
			for (var key in tests) {
			  if (tests.hasOwnProperty(key)) {
				
				//push test to the report list
				var test = tests[key];
				test.key = key;
				this.results.push(test);

			  }
			}
			
			this.reportFullResults();
		}
		
	},
	runNextTest : function(){
		
		if(runTests.length < 1) {
			this.reportFullResults();
			return;
		}
		
		var test = runTests.shift();
		this.$.test && this.$.test.destroy();
		this.createComponent({
			kind: test,
			name: "test",
			key: test.key,
			onReportResults: "processTestResults",
			reportFPS: this.reportFPS
		});

		//these should queue instead
		this.$.test.runTest();
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
	//	// enyoBench always gathers startup time separately from
	// the tests that it runs.  This needs to run before the
	// report is shown, but after any test rendering is complete.
	updateTimings: function() {
		var perfTiming = window.performance.timing;
		var base = perfTiming.navigationStart || 0;
		var enyoTiming = enyoBench.timing;
		
		this.timestamps = [
			{ display: "fetchStart",                 time: perfTiming.fetchStart - base },
			{ display: "enyo Load Start",            time: enyoTiming.enyoLoadStart },
			{ display: "enyo Load End",              time: enyoTiming.enyoLoadEnd },
			{ display: "app Load Start",             time: enyoTiming.appLoadStart },
			{ display: "app Load End",               time: enyoTiming.appLoadEnd },
			{ display: "domInteractive",             time: perfTiming.domInteractive - base },
			{ display: "domContentLoadedEventStart", time: perfTiming.domContentLoadedEventStart - base },
			{ display: "domContentLoadedEventEnd",   time: perfTiming.domContentLoadedEventEnd - base },
			{ display: "domComplete",                time: perfTiming.domComplete - base },
			{ display: "enyo Ready",                 time: enyoTiming.enyoReady }
		];
	},
	reportFullResults: function(){
		
			this.view = new ReportView();
			this.view.app = this;
		
			this.updateTimings();
		
			//sets the timestamps on the right side of the summary
			this.view.setTimestamps(this.timestamps);
			this.view.set('results', this.results);
		
			Spotlight.enablePointerMode();
		

			//sets the results, and also the test list is derived from this
			this.view.setResults(this.results);

			//render the view
			this.render();
	}
});
