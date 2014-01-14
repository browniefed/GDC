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

	CodemirrorManager.prototype.on = function(target, func) {
		this._codemirror.on(target, func);
	};

	CodemirrorManager.prototype.off = function(target, func) {
		this._codemirror.off(target, func);
	};

	return CodemirrorManager;
});