define(['../../build/GDC', '../../js/codemirror/lib/codemirror'], function(GDC, codemirror) {
	var clone = new GDC(codemirror, document.getElementById('textarea'));

	var boldButton = document.getElementById('gdc-bold-button');

	boldButton.addEventListener('click', function() {
		clone.fire('bold');
	}, false)
});