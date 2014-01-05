define(['GDC/utils/rangeBuilder'], function(rangeBuilder) {

	"use strict";

	var style = {},
		removeStyle = false,
		startRange = {},
		endRange = {},
		codemirrorInstance;

	style.name = 'bold';
	style.executeStyle = function(selection) {
		codemirrorInstance = this._codemirror.getCodemirror();
		if (selection) {
			removeStyle = false;

			var marks = this._codemirror.getCodemirror().doc.findMarksAt(selection.from) || [];
				marks.concat(this._codemirror.getCodemirror().doc.findMarksAt(selection.to) || []);
				if (marks.length) {
					_(marks).forEach(function(value) {
						if (value.className == 'gdc-style-' + style.name) {
							startRange = rangeBuilder.fromRange(value.find().from, selection.from);
							endRange = rangeBuilder.toRange(value.find().to, selection.to);

							value.clear();

							codemirrorInstance.doc.markText(startRange.from, startRange.to, {className: 'gdc-style-' + style.name});
							codemirrorInstance.doc.markText(endRange.from, endRange.to, {className: 'gdc-style-' + style.name});
							removeStyle = true;
						}
					});		
				}
				


			if (!removeStyle) {
				this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, {className: 'gdc-style-' + style.name});
			}

		} else {

		}
	};

	return style;
});

//clear marktext 
//get selection
//get selection range from the markText startMarks
//get selection ragne to the markText endMarks