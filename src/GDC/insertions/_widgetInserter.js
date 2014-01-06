define(['GDC/insertions/comment', 
		'GDC/insertions/images', 
		'GDC/insertions/link', 
		'GDC/insertions/table'], function(comment, image, link, table) {

	"use strict";
	
	var widgets = {
		comment: comment,
		image: image,
		link: link,
		table: table
	};

	return {
		insert: function(widget) {
			widgets[widget].insertWidget.call(this);
		}
	};

});