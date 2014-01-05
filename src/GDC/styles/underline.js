define([], function() {

	"use strict";

	var style = {};
	
	style.name = 'underline';
	style.executeStyle = function(selection) {
		if (selection) {
			this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, {className: 'gdc-style-' + style.name});
		} else {

		}
	};

	return style;
});