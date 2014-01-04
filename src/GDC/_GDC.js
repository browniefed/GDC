define(['GDC/_codemirror', 'GDC/utils/defineProperties' 'GDC/prototype/_prototype'], function(CodemirrorManager, defineProperties, prototype) {
	'use strict';

	var GDC = function(codemirror, el) {
		this._codemirror = new CodemirrorManager(codemirror);
		this._codemirror.fromTextArea(el);
	};

	defineProperties(GDC, {
		prototype: {
			value: prototype
		}
	})
	return GDC;
});