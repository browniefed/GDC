define(['GDC/insertions/widgets/table'], function(ImageWidget) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'image';

	insert.insertWidget = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			endLine = codeMirrorInstance.doc.getCursor(false),
			imgInsert = new ImageWidget('morgan.png');

		codeMirrorInstance.markText(currentLine, endLine, {replacedWith: imgInsert.getDOM()});
	};

	return insert;
});