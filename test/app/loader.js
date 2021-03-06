define(['../../build/GDC', '../../js/codemirror/lib/codemirror'], function(GDC, codemirror) {
	var clone = new GDC(codemirror, document.getElementById('textarea'));

	var boldButton = document.getElementById('gdc-bold-button'),
		italicButton = document.getElementById('gdc-italic-button'),
		strikethroughButton = document.getElementById('gdc-strikethrough-button'),
		underlineButton = document.getElementById('gdc-underline-button'),
		tableButton = document.getElementById('gdc-table-button'),
		imageButton = document.getElementById('gdc-image-button'),
		ulButton = document.getElementById('gdc-list-ul-button'),
		olButton = document.getElementById('gdc-list-ol-button');

	boldButton.addEventListener('click', function() {
		clone.fire('apply-bold');
	}, false);

	italicButton.addEventListener('click', function() {
		clone.fire('apply-italic');
	}, false);
	strikethroughButton.addEventListener('click', function() {
		clone.fire('apply-strikethrough');
	}, false);
	underlineButton.addEventListener('click', function() {
		clone.fire('apply-underline');
	}, false);

	tableButton.addEventListener('click', function() {
		clone.fire('insert-table');
	}, false);

	imageButton.addEventListener('click', function() {
		clone.fire('insert-image');
	}, false);

	ulButton.addEventListener('click', function() {
		clone.fire('insert-ul');
	}, false);

	olButton.addEventListener('click', function() {
		clone.fire('insert-ol');
	}, false);
});