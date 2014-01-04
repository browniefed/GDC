define(['GDC/_codemirror'], function(CodemirrorManager) {
	'use strict';

	var GDC = function(codemirror, el) {
		this._codemirror = new CodemirrorManager(codemirror);
		this._codemirror.fromTextArea(el);
	};
	return GDC;
});