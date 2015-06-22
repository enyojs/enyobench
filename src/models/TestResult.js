var
	kind = require('enyo/kind');


module.exports = kind({
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