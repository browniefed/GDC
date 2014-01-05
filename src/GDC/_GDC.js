define(['GDC/_codemirror', 
		'GDC/utils/create', 
		'GDC/utils/defineProperties', 
		'GDC/prototype/_prototype', 
		'GDC/styles/_styles'], 
	function(CodemirrorManager, create, defineProperties, prototype, styleApplier) {
	'use strict';

	var GDC = function(codemirror, el) {
		this._codemirror = new CodemirrorManager(codemirror);
		this._codemirror.fromTextArea(el);
		this._subs = {};
		this.on('bold', function() {
			styleApplier.applyStyle('bold');
		});
		this.on('italic', function() {
			styleApplier.applyStyle('italic');
		});
		this.on('strikethrough', function() {
			styleApplier.applyStyle('strikethrough');
		});
		this.on('underline', function() {
			styleApplier.applyStyle('underline');
		});
	};

	defineProperties(GDC, {
		prototype: {
			value: prototype
		}
	});

	return GDC;
});