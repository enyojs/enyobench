/* exported FPS */
window.FPS = (function(window) {

	var ringBufferLen = 600;

	// should be large enough for at least 10 minutes worth of recording
	var timings = [];
	// first valid entry in timings ring buffer
	var firstTiming = 0;
	// one after last valid entry in timings ring buffer
	var lastTiming = 0;

	var requestAnimationFrame =
		window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;

	var cancelAnimationFrame =
		window.cancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.msCancelAnimationFrame;

	// use the higher precision method if available
	var now;
	if (window.performance && window.performance.now) {
		now = function() {
			return window.performance.now();
		};
	} else {
		now = function() {
			return Date.now;
		};
	}

	var rafID = 0;
	var looped = false;
	var processFrame = function() {
		timings[lastTiming++] = now();
		if (lastTiming >= ringBufferLen) {
			looped = true;
			lastTiming = 0;
		}
		// once we fill the ring buffer, start moving
		// the first value with each new entry
		if (looped) {
			firstTiming = (firstTiming + 1) % ringBufferLen;
		}
		rafID = requestAnimationFrame(processFrame);
	};

	var FPS = {
		startMeasurement: function () {
			for (var i = 0; i < ringBufferLen; ++i) {
				timings[i] = 0;
			}

			firstTiming = 0;
			lastTiming = 0;
			rafID = requestAnimationFrame(processFrame);
		},
		stopMeasurement: function () {
			cancelAnimationFrame(rafID);
		},
		// frame rate can be computed by adding up time deltas between frames
		// until you exceed rangeInMS. Then, divide that time by the number of
		// entries.  For example, if you have to add 30 entries together to get
		// 1000ms, then you have 30 frames per second.  A single delta is ms would
		// be converted to fps by taking its reciprocal then multiplying by 1000.
		averageRateOverTime: function(rangeInMS) {
			var totalTime = 0;
			var samples = 0;
			var pos = lastTiming - 1;
			var lastPos = pos;

			// catch case of no data in buffer, return undefined
			if (!looped && firstTiming === lastTiming) {
				return undefined;
			}

			while (totalTime < rangeInMS && pos != firstTiming) {
				if (--pos < 0) {
					pos += ringBufferLen;
				}
				totalTime += timings[lastPos] - timings[pos];
				lastPos = pos;
				++samples;
			}
			return (samples / totalTime * 1000);
		},
		// this will give the frame rate taking only the most recent sample into
		// consideration
		instantaneousFrameRate: function() {
			return this.averageRateOverTime(1);
		}
	};
	return FPS;
})(window);