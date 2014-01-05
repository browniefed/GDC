define(['../../build/GDC', '../../js/codemirror/lib/codemirror'], function(GDC, codemirror) {
	var clone = new GDC(codemirror, document.getElementById('textarea'));

	var boldButton = document.getElementById('gdc-bold-button'),
		italicButton = document.getElementById('gdc-italic-button'),
		strikethroughButton = document.getElementById('gdc-strikethrough-button'),
		underlineButton = document.getElementById('gdc-underline-button');

	boldButton.addEventListener('click', function() {
		clone.fire('bold');
	}, false);

	italicButton.addEventListener('click', function() {
		clone.fire('italic');
	}, false);
	strikethroughButton.addEventListener('click', function() {
		clone.fire('strikethrough');
	}, false);
	underlineButton.addEventListener('click', function() {
		clone.fire('underline');
	}, false);
});