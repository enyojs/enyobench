var
	kind = require('enyo/kind');

module.exports = kind({
	name: "enyoBench.TimestampModel",
	kind: "enyo.Model",
	attributes: {
		display: { type: String },
		time:    { type: Number }
	}
});