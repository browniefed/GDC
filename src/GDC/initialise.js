define(['GDC/_codemirror',
		'GDC/utils/defineProperties',
		'GDC/styles/_styles'], function(CodemirrorManager, defineProperties, styleApplier) {

	"use strict";

	return function(gdc, options) {
		defineProperties(gdc, {
			_subs: {
				value: {}
			}
		});

		gdc._codemirror = new CodemirrorManager(options.codemirror);
		gdc._codemirror.fromTextArea(options.el);

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