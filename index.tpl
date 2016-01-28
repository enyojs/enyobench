doctype html
html(lang="en")
	head
		meta(http-equiv="x-ua-compatible", content="ie=edge")
		meta(charset="utf-8")
		title EnyoBench
		link(rel='shortcut icon', href='assets/favicon.ico')
		meta(http-equiv='Content-Type', content='text/html; charset=utf8')
		meta(name='apple-mobile-web-app-capable', content='yes')
		meta(name='viewport', content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no') 
		link(rel='stylesheet', type='text/css', href='style/bootstrap.css')
		link(rel='stylesheet', type='text/css', href='style/main.css')
		script.
			var now = (function () {
			// we have to check whether or not the browser has supplied a valid
			// method to use
			var perf = window.performance || {};
			// test against all known vendor-specific implementations,
			// but use a fallback just in case
			perf.now = perf.now || perf.mozNow || perf.msNow || perf.oNow || perf.webkitNow ||
			function() { return Date.now(); };
			return function () {
			return perf.now();
			};
			}());
			var enyoBench = {
			timing: {}
			};
			enyoBench.timing.enyoLoadStart = now();
			
		each stylesheet in stylesheets
			if stylesheet.href
				link(rel="stylesheet", href=stylesheet.href)
			else
				style!= stylesheet.contents
		each script, i in scripts
			if i == scripts.length - 1
				script.
					enyoBench.timing.enyoLoadEnd = now();
					enyoBench.timing.appLoadStart = now();
			if script.src
				script(src=script.src)
			else
				script!= script.contents
		script.
			enyoBench.timing.appLoadEnd = now();
	body.enyo-unselectable

