define(['../_currentStyles', 'bold','italic','underline','strikethrough'], function(styleManager, bold, italic, underline, strikethrough) {

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
		styles[style].executeStyle(selection);
	};

	return styleApplier;
});