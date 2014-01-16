define([], function() {

	"use strict";

	var ListUL = function() {
		this.dom = document.createElement('span');
		this.dom.innerHTML = '  •  ';
	}

	ListUL.prototype.getDOM = function() {
		return this.dom;
	}
	

	return {
		obj: ListUL,
		SENTRY: '♂'
	};
});