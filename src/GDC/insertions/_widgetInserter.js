define(['GDC/insertions/comment', 
		'GDC/insertions/images', 
		'GDC/insertions/link', 
		'GDC/insertions/table',
		'GDC/insertions/list'], function(comment, image, link, table, list) {

	"use strict";
	
	var widgets = {
		comment: comment,
		image: image,
		link: link,
		table: table, 
		list: list
	},
	createdWidgets = [];

	return {
		insert: function(widget, selection, suboption) {
			createdWidgets.push(widgets[widget].insertWidget.call(this, selection, suboption));
		}, 
		getCreatedWidgets: function() {
			return createdWidgets;
		},
		widgets: widgets
	};

});