var
	kind = require('enyo/kind');

var	
	Image = require('enyo/Image');

var
	speedKind = require('./SpeedTest');

// based on Chris P's updated CSS rotation sample
module.exports = speedKind({
	name: "enyoBench.RotatingImageTest",
	kind: "enyoBench.SpeedTest",
	testName: "CSS Image Rotation",
	view: kind({
		components: [{
			classes: "outer-container",
			components: [{
				name: "rotor",
				classes: "rotation-container",
				components: [
					{kind: Image, classes: "img1 rotatable-image", src: "assets/1.jpg"},
					{kind: Image, classes: "img2 rotatable-image", src: "assets/2.jpg"},
					{kind: Image, classes: "img3 rotatable-image", src: "assets/3.jpg"},
					{kind: Image, classes: "img4 rotatable-image", src: "assets/4.jpg"}
				]
			}]
		}]
	}),
	currentRotation: 0,
	rotate: function() {
		this.currentRotation += 90;
		this.view.$.rotor.applyStyle(
			"-webkit-transform",
			"scale3d(1,1,1) translateZ(-240px) rotateY(" + this.currentRotation + "deg)");
	},
	runTest: function() {
		this.render();
		this.inherited(arguments);
		this.rotate();
		this.rotateInterval = setInterval(this.bindSafely("rotate"), 500);
		setTimeout(this.bindSafely("testComplete"), 4000);
	},
	testComplete: function() {
		clearInterval(this.rotateInterval);
		this.inherited(arguments);
	}
});
