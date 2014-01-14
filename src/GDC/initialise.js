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

		gdc._codemirror = new CodemirrorManager(options.codemirror, {
			lineWrapping: true
		});

		gdc._codemirror.fromTextArea(options.el);

		gdc.on('apply-bold', function() {
			styleApplier.applyStyle.call(gdc, 'bold', {});
		});
		
		gdc.on('apply-italic', function() {
			styleApplier.applyStyle.call(gdc, 'italic', {});
		});
		gdc.on('apply-strikethrough', function() {
			styleApplier.applyStyle.call(gdc, 'strikethrough', {});
		});
		gdc.on('apply-underline', function() {
			styleApplier.applyStyle.call(gdc, 'underline', {});
		});

		gdc.on('insert-table', function() {
			widgetInserter.insert.call(gdc, 'table');
		});

		gdc.on('insert-image', function() {
			widgetInserter.insert.call(gdc, 'image');
		});

		gdc.on('insert-ol', function() {
			widgetInserter.insert.call(gdc, 'list', {}, 'listol');
		});

		gdc.on('insert-ul', function() {
			widgetInserter.insert.call(gdc, 'list', {}, 'listul');
		});

		gdc._codemirror.on('beforeSelectionChange', function() {
			console.log(arguments);
		});

	};
});