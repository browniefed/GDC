define(['GDC/utils/defineProperties',
		'GDC/styles/_styles'], function(defineProperties, styleApplier) {

	"use strict";

	return function(gdc) {
		defineProperties(gdc, {
			_subs: {
				value: {}
			}
		});

		gdc.on('bold', function() {
			styleApplier.applyStyle('bold');
		});
		gdc.on('italic', function() {
			styleApplier.applyStyle('italic');
		});
		gdc.on('strikethrough', function() {
			styleApplier.applyStyle('strikethrough');
		});
		gdc.on('underline', function() {
			styleApplier.applyStyle('underline');
		});
	};
});