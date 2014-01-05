define(['GDC/_codemirror', 
		'GDC/utils/create', 
		'GDC/utils/defineProperties', 
		'GDC/prototype/_prototype', 
		'GDC/styles/_styles',
		'circular',
		'GDC/initialise'
		], 
	function(CodemirrorManager, create, defineProperties, prototype, styleApplier, circular, initialise) {
	'use strict';

	var GDC = function(codemirror, el) {
		initialise(this);
		this._codemirror = new CodemirrorManager(codemirror);
		this._codemirror.fromTextArea(el);
	};

	defineProperties(GDC, {
		prototype: {
			value: prototype
		},
		_subs: {
			value: {}
		}
	});

	GDC.prototype.constructor = GDC;
	circular.GDC = GDC;
	
	return GDC;
});