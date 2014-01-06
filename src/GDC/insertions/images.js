define([], function() {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'image';

	insert.insertWidget = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true),
			endLine = codeMirrorInstance.doc.getCursor(false);


		var image = new Image();
		image.src = 'morgan.png';
		image.style.display = 'inline';
		codeMirrorInstance.markText(currentLine, endLine, {replacedWith: image});
	};

	return insert;
});