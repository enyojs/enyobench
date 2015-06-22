// these will be used in the future with DataRepeater is acting sane and I've figured
// out exactly how to bind to the multiple collections

enyo.kind({
	name: "enyoBench.TimestampModel",
	kind: "enyo.Model",
	attributes: {
		display: { type: String },
		time:    { type: Number }
	}
});

enyo.kind({
	name: "enyoBench.TestResultModel",
	kind: "enyo.Model",
	attributes: {
		name:     { type: String },
		start:    { type: Number },
		end:      { type: Number },
		duration: { type: Number },
		fps:      { type: Number } // can be NaN to indicate no result
	}
});

enyo.kind({
	name: "enyoBench.ResultsModel",
	kind: "enyo.Model",
	parse: function (data) {
		data.timestamps = new enyo.Collection(data.timestamps, {model: enyoBench.TimestampModel});
		data.testResults = new enyo.Collection(data.testResults, {model: enyoBench.TestResultModel});
		return data;
	}
});