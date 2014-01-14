define(['GDC/insertions/widgets/listol', 'GDC/insertions/widgets/listul'], function(ListOlWidget, ListUlWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor,
		listTypes = {
			listol: ListOlWidget,
			listul: ListUlWidget
		}

  	var LIST_SENTRY = "♂";

	insert.name = 'list';

	insert.insertWidget = function(selection, listType) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			listInsert = new listTypes[listType];

		codeMirrorInstance.replaceRange(LIST_SENTRY, {line: currentLine.line, ch: 0});
		codeMirrorInstance.markText({line: currentLine.line, ch:0}, {line: currentLine.line, ch: 1}, {replacedWith: listInsert.getDOM()});
	};

	return insert;
});