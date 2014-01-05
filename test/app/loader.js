define(['../../build/GDC', '../../js/codemirror/lib/codemirror'], function(GDC, codemirror) {
	var clone = new GDC(codemirror, document.getElementById('textarea'));
	setTimeout(function() {
		clone.fire('bold');
	},3000)
});