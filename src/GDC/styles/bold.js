define(['GDC/_currentStyles'], function(styleManager) {

	"use strict";

	var style = {},
		removeStyle = false,
		codeMirrorInstance;

	style.name = 'bold';
	style.executeStyle = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		if (selection) {
			removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);

			if (!removeStyle) {
				this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, {className: 'gdc-style-' + style.name});
			}

		} else {

		}
	};

	return style;
});