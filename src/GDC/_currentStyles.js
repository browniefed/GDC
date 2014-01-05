define(['GDC/utils/rangeBuilder'], function(rangeBuilder) {

	"use strict";

	var currentStyles = {},
		removeStyle = false, 
		marks = [],
		startRange = {},
		endRange = {};

	return {
		addStyle: function(name, style) {
			currentStyles[name] = style;
		},
		removeStyle: function(name) {
			currentStyles[name] = null;
		},
		removeStyleFromSelection: function(codeMirrorInstance, selection, styleClass) {
			marks = codeMirrorInstance.doc.findMarksAt(selection.from) || [];
			removeStyle = false;
			marks.concat(codeMirrorInstance.doc.findMarksAt(selection.to) || []);

			if (marks.length) {
				_(marks).forEach(function(value) {
					if (value.className == styleClass) {
						startRange = rangeBuilder.fromRange(value.find().from, selection.from);
						endRange = rangeBuilder.toRange(value.find().to, selection.to);

						value.clear();

						codeMirrorInstance.doc.markText(startRange.from, startRange.to, {className: 'gdc-style-' + styleClass});
						codeMirrorInstance.doc.markText(endRange.from, endRange.to, {className: 'gdc-style-' + styleClass});
						removeStyle = true;
					}
				});		
			}
			return removeStyle;
		}
	};
});