define([], function() {

	"use strict";

	var style = {};

	style.name = 'bold';
	style.executeStyle = function(selection) {

		console.log(this);
		if (selection) {

		} else {

		}
	};

	return style;
});