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
	},
	createdWidgets = [];

	return {
		insert: function(widget) {
			createdWidgets.push(widgets[widget].insertWidget.call(this));
		}, 
		getCreatedWidgets: function() {
			return createdWidgets;
		}
	};

});