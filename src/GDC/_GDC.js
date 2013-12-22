define([], function() {
	'use strict';

	var GDC = function(codemirror, el) {
		this._codemirror = codemirror;
		this.codemirror = codemirror.fromTextArea(el);
	};
	return GDC;
});