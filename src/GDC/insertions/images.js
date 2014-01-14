define(['GDC/insertions/widgets/image'], function(ImageWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor,
		IMAGE_SENTRY = 'Ï';

	insert.name = 'image';
	insert.insertWidget = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			endLine = codeMirrorInstance.doc.getCursor(false),
			imgInsert = new ImageWidget('morgan.png');

		if (currentLine.line == endLine.line && currentLine.ch == endLine.ch) {
			endLine = {line: endLine.line, ch: endLine.ch + 1};
		}
		codeMirrorInstance.replaceRange(IMAGE_SENTRY, currentLine, endLine);
		codeMirrorInstance.markText(currentLine, endLine, {handleMouseEvents: true, replacedWith: imgInsert.getDOM()});
	};

	return insert;
});