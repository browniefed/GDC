define(['GDC/_currentStyles', 'GDC/styles/bold','GDC/styles/italic','GDC/styles/underline','GDC/styles/strikethrough'], function(styleManager, bold, italic, underline, strikethrough) {

	"use strict";

	var styles = {
		bold: bold,
		italic: italic,
		underline: underline,
		strikethrough: strikethrough
	};
	
	var styleApplier = {};

	styleApplier.applyStyle = function(style, selection) {
		if (!selection) {
			styleManager.addStyle(style, styles[style]);
			return;
		}
		styles[style].executeStyle.call(this, selection);
	};


	return styleApplier;
});