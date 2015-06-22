// JS number formatting utilities
(function (window) {

	var matchLeadingNumber = /^\d*(\.\d*[1-9])?/;

	window.formatDecimal = function(inValue, inMaxDecimals) {
		var s = inValue.toFixed(inMaxDecimals);
		var m = s.match(matchLeadingNumber);
		return (m && m[0]);
	};

})(window);