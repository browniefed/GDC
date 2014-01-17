define(['GDC/insertions/widgets/listol', 'GDC/insertions/widgets/listul'], function(ListOlWidget, ListUlWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor,
		listTypes = {
			listol: {
				obj: ListOlWidget,
				SENTRY: '♀'
			}, 
			listul: { 
				obj: ListUlWidget,
				SENTRY: '♂'
			}

		},
		altListType = {
			listol: 'listul',
			listul: 'listol'
		},
		LIST_SENTRY;


	insert.name = 'list';
	insert.listTypes = listTypes;
	
	insert.insertWidget = function(selection, listType) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			list = listTypes[listType],
			listInsert = list.obj,
			listObj;

		LIST_SENTRY = list.SENTRY;
		var isLineList = codeMirrorInstance.getLine(currentLine.line).indexOf(LIST_SENTRY) !== -1,
			isLineAltList = codeMirrorInstance.getLine(currentLine.line).indexOf(listTypes[altListType[listType]].SENTRY) !== -1;

		if (!isLineList && !isLineAltList) {
			listObj = new listInsert();
			codeMirrorInstance.replaceRange(LIST_SENTRY, {line: currentLine.line, ch: 0});
			codeMirrorInstance.markText({line: currentLine.line, ch:0}, {line: currentLine.line, ch: 1}, {replacedWith: listObj.getDOM(currentLine.line, getFirstListLine(currentLine.line))});
		} else if (isLineList) {
			codeMirrorInstance.replaceRange('', {line: currentLine.line, ch: 0}, {line: currentLine.line, ch: 1});
		} else if (!isLineList && isLineAltList) {
			codeMirrorInstance.replaceRange('', {line: currentLine.line, ch: 0}, {line: currentLine.line, ch: 1});
			LIST_SENTRY = listTypes[listType].SENTRY;
			listObj = listTypes[altListType[listType]].obj;
			listObj = new listInsert();
			codeMirrorInstance.replaceRange(LIST_SENTRY, {line: currentLine.line, ch: 0});
			codeMirrorInstance.markText({line: currentLine.line, ch:0}, {line: currentLine.line, ch: 1}, {replacedWith: listObj.getDOM(currentLine.line, getFirstListLine(currentLine.line))});
		} 
	};

	function getFirstListLine(lineStart) {
		var checkLine = ((lineStart - 1) >= 0 ? lineStart - 1 : 0);
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