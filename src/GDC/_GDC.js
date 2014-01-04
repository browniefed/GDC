define(['GDC/_codemirror', 'GDC/utils/create', 'GDC/utils/defineProperties', 'GDC/prototype/_prototype'], function(CodemirrorManager, create, defineProperties, prototype) {
	'use strict';

	var GDC = function(codemirror, el) {
		this._codemirror = new CodemirrorManager(codemirror);
		this._codemirror.fromTextArea(el);
	};

	defineProperties(GDC, {
		prototype: {
			value: prototype
		},
		_subs: { value: create( null ) },
	});

	return GDC;
});