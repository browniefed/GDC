define([], function() {

	"use strict";

	var ListOL = function() {
		this.dom = document.createElement('span');
		this.replace = '  %d.  ';
	}

	ListOL.prototype.getDOM = function(currentLine, startOfList) {
		this.dom.innerHTML = (this.replace.replace('%d', (currentLine - startOfList) + 1))
		return this.dom;
	}
	

	return {
		obj: ListOL,
		SENTRY: '♀'
	};
});