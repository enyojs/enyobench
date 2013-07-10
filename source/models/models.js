/*
	enyoBench.timing is an object that stores locally gathered timing data of
	timestamps from the Date.now() call (matching the values from
	window.performance.timing).

	Since these are created as part of the page's index.html call, we don't define
	anything here, but we do document the values.
*/

enyoBench.timing = enyoBench.timing || {
	// this records the time before and after the script tag that loads enyo.js
	enyoLoadStart: 0,
	enyoLoadEnd: 0,

	// this records the time before and after the script tag that loads app.js
	appLoadStart: 0,
	appLoadEnd: 0
};