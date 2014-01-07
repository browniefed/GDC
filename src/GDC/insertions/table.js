define(['GDC/insertions/widgets/table'], function(Table) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'table';



	insert.insertWidget = function() {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;

		var currentLine = codeMirrorInstance.doc.getCursor(true).line,
			tableInstance = new Table(2, 5);

			tableInstance.setWidget(codeMirrorInstance.addLineWidget(currentLine, tableInstance.getDOM()));
			tableInstance.initTableCells(codeMirrorConstructor);

			return tableInstance;
	};

	return insert;


});

//create an external table widget
//It's actually a table, but each cell is a GDC
//Then we can just fire events on it, maybe make a GDC inline/barebones
//This will be passed a height, and if that height changes then it'll resize itself, fire heightchanged event and then the master GDC will take care of resizing the table cell