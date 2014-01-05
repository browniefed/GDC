define(['GDC/_currentStyles', 'GDC/styles/bold','GDC/styles/italic','GDC/styles/underline','GDC/styles/strikethrough'], function(styleManager, bold, italic, underline, strikethrough) {

	"use strict";

	var styles = {
		bold: bold,
		italic: italic,
		underline: underline,
		strikethrough: strikethrough
	};
	
	var styleApplier = {},
		isSelected = false,
		selection = {};

	styleApplier.applyStyle = function(style) {
		isSelected = this._codemirror.getCodemirror().somethingSelected();
		if (!isSelected) {
			styleManager.addStyle(style, styles[style]);
			return;
		} else {		
			selection.from = this._codemirror.getCodemirror().doc.getCursor(true);
			selection.to = this._codemirror.getCodemirror().doc.getCursor(false);
			styles[style].executeStyle.call(this, selection);
		}
	};


	return styleApplier;
});