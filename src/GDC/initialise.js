define(['GDC/_codemirror',
		'GDC/utils/defineProperties',
		'GDC/styles/_styles',
		'GDC/insertions/_widgetInserter'], function(CodemirrorManager, defineProperties, styleApplier, widgetInserter) {

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
			styleApplier.applyStyle.call(gdc, 'bold', {});
		});
		gdc.on('italic', function() {
			styleApplier.applyStyle.call(gdc, 'italic', {});
		});
		gdc.on('strikethrough', function() {
			styleApplier.applyStyle.call(gdc, 'strikethrough', {});
		});
		gdc.on('underline', function() {
			styleApplier.applyStyle.call(gdc, 'underline', {});
		});

		gdc.on('insert-table', function() {
			widgetInserter.insert.call(gdc, 'table');
		});
	};
});