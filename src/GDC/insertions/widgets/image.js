define([], function() {
	"use strict";

	var ImageWidget = function(src) {
		this.image = new Image();
		this.style.display = 'inline';
		if (src) {
			this.image.src = src;
		}
	}

	IamgeWidget.prototype.getDOM = function() {
		return this.image;
	}

	return ImageWidget;
});