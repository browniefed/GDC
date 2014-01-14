define(['GDC/insertions/widgets/table'], function(Table) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'table';



	insert.insertWidget = function(x, y) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var x = x || 2;
		var y = y || 5;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			tableInstance = new Table(x, y);

			codeMirrorInstance.replaceRange('\n', {line: currentLine.line + 1, ch: 0});
			codeMirrorInstance.replaceRange('\n', {line: currentLine.line + 2, ch: 0});

			tableInstance.setWidget(codeMirrorInstance.addLineWidget(currentLine.line, tableInstance.getDOM()));
			tableInstance.initTableCells(codeMirrorConstructor);

			return tableInstance;
	};

	return insert;


});