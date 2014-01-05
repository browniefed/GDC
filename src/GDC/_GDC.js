define([
		'GDC/utils/create', 
		'GDC/utils/defineProperties', 
		'GDC/prototype/_prototype', 
		'GDC/styles/_styles',
		'circular',
		'GDC/initialise'
		], 
	function(create, defineProperties, prototype, styleApplier, circular, initialise) {
	'use strict';

	var GDC = function(codemirror, el) {
		initialise(this, {codemirror: codemirror, el: el});
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