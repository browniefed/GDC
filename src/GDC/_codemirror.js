define([], function() {

	"use strict";

	var CodemirrorManager = function(codemirror) {
		this.codemirror = codemirror;
	};

	CodemirrorManager.prototype.getCodemirror = function() {
		return this._codemirror;
	};

	CodemirrorManager.prototype.getSelection = function() {

	};

	CodemirrorManager.prototype.fromTextArea = function(el) {
		this._codemirror = this.codemirror.fromTextArea(el);
	};


	return CodemirrorManager;
});