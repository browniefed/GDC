define(['GDC/insertions/widgets/listol', 'GDC/insertions/widgets/listul'], function(ListOlWidget, ListUlWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor,
		listTypes = {
			listol: ListOlWidget,
			listul: ListUlWidget
		},
		LIST_SENTRY;


	insert.name = 'list';

	insert.insertWidget = function(selection, listType) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			list = listTypes[listType],
			listInsert = list.obj,
			listObj;

		LIST_SENTRY = list.SENTRY;

		var isLine = codeMirrorInstance.getLine(currentLine.line).indexOf(LIST_SENTRY) !== -1;

		if (!isLine) {
			listObj = new listInsert();
			codeMirrorInstance.replaceRange(LIST_SENTRY, {line: currentLine.line, ch: 0});
			codeMirrorInstance.markText({line: currentLine.line, ch:0}, {line: currentLine.line, ch: 1}, {replacedWith: listObj.getDOM(currentLine.line, getFirstListLine(currentLine.line))});
		} else {
			codeMirrorInstance.replaceRange('', {line: currentLine.line, ch: 0}, {line: currentLine.line, ch: 1});
		}
	};

	function getFirstListLine(lineStart) {
		debugger;
		var checkLine = ((lineStart - 1) >= 0 ? lineStart - 1 : 0);
		debugger;
		var isList = codeMirrorInstance.getLine(checkLine).indexOf(LIST_SENTRY) !== -1;
		if (!isList) {
			return lineStart;
		}

		while(isList) {
			if (checkLine <= 0) {
				break;
			}
			isList = codeMirrorInstance.getLine(checkLine).indexOf(LIST_SENTRY) !== -1;
			if (isList) {
				checkLine--;
			} else {
				checkLine++;
			}
		}
		return checkLine;

	}

	return insert;
});