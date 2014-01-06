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
//This will be passed a height, and if that height changes then it'll resize itself, fire heightchanged event and then the master GDC will take care of resizing the table cell