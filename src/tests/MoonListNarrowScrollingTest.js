var
	speedKind = require('./SpeedTest');

var
	kind = require('enyo/kind');

var
	Collection = require('enyo/Collection'),
	DataList = require('moonstone/DataList'),
	FittableRows = require('layout/FittableRows'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel');

var
	utils = require('enyo/utils');

var 
	MoonDataListScrollingTest = require('./MoonListScrollingTest');

var NarrowMoonDataListScrollingTest = speedKind({
	name: "enyoBench.NarrowMoonDataListScrollingTest",
	kind: MoonDataListScrollingTest,
	testName: "Narrow Vertical DataList, Moonstone Scroller (1000 items)",
	view: kind({
		kind: FittableRows,
		style: "width: 320px;",
		components: [{
			kind:DataList,
			name: "list",
			fit: true,
			renderDelay: null,
			components: [
				{ components: [{
					name: "label"
				}],
				bindings: [
					{ from: "model.idx", to: "$.label.content" }
				]
			}]
		}]
	})
});

module.exports = NarrowMoonDataListScrollingTest;