define([], function() {

	"use strict";

	var ListOL = function() {
		this.dom = document.createElement('span');
		this.dom.innerHTML = '  •  ';
	}

	ListOL.prototype.getDOM = function() {
		return this.dom;
	}
	

	return ListOL;
});