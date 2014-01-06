define(['../../build/GDC', '../../js/codemirror/lib/codemirror'], function(GDC, codemirror) {
	var clone = new GDC(codemirror, document.getElementById('textarea'));

	var boldButton = document.getElementById('gdc-bold-button'),
		italicButton = document.getElementById('gdc-italic-button'),
		strikethroughButton = document.getElementById('gdc-strikethrough-button'),
		underlineButton = document.getElementById('gdc-underline-button'),
		tableButton = document.getElementById('gdc-table-button'),
		imageButton = document.getElementById('gdc-image-button');

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

	tableButton.addEventListener('click', function() {
		clone.fire('insert-table');
	}, false);

	imageButton.addEventListener('click', function() {
		clone.fire('insert-image');
	}, false);
});