define([], function() {

	"use strict";

	var insert = {},
		codeMirrorInstance;

	insert.name = 'table';

	insert.insertWidget = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		var currentLine = codeMirrorInstance.doc.getCursor(true).line,
			tableEle = document.createElement('div');
			tableEle.className = 'gdc-table-widget';

		codeMirrorInstance.addLineWidget(currentLine, tableEle, {handleMouseEvents: true});

	};

	return insert;
});

//create an external table widget
//It's actually a table, but each cell is a GDC
//Then we can just fire events on it, maybe make a GDC inline/barebones