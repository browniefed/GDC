define([], function() {
	"use strict";

	var ImageWidget = function(src) {
		this.image = new Image();
		this.image.style.display = 'inline';
		if (src) {
			this.image.src = src;
		}
	};

	ImageWidget.prototype.getDOM = function() {
		return this.image;
	};

	return ImageWidget;
});