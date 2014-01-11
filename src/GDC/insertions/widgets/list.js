define(['GDC/insertions/widgets/listol', 'GDC/insertions/widgets/listul'], function(ListOlWidget, ListUlWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor,
		listTypes = {
			lilstol: ListOlWidget,
			listul: ListUlWidget
		}

	insert.name = 'image';

	insert.insertWidget = function(selection, listType) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			endLine = codeMirrorInstance.doc.getCursor(false),
			listInsert = listTypes[listType];

		codeMirrorInstance.markText(currentLine, endLine, {replacedWith: listInsert.getDOM()});
	};

	return insert;
});