define([], function() {

	"use strict";

	var currentStyles = {};

	return {
		addStyle: function(name, style) {
			currentStyles[name] = style;
		},
		removeStyle: function(name) {
			currentStyles[name] = null;
		}
	};
});