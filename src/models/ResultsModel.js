var
	kind = require('enyo/kind');

module.exports = kind({
	name: "enyoBench.ResultsModel",
	kind: "enyo.Model",
	parse: function (data) {
		data.timestamps = new enyo.Collection(data.timestamps, {model: enyoBench.TimestampModel});
		data.testResults = new enyo.Collection(data.testResults, {model: enyoBench.TestResultModel});
		return data;
	}
});