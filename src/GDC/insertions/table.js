define(['GDC/utils/tableFuncs'], function(tableUtils) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'table';

	insert.insertWidget = function(selection) {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true).line,
			tableEle = tableUtils.tableCreate();
			

		var tableWidget = codeMirrorInstance.addLineWidget(currentLine, tableEle, {handleMouseEvents: true});
		
		var tds = tableWidget.node.querySelectorAll('td');
		_(tds).forEach(function(td, index) {
			var options = {};
			
			if (index == 0) {
				options.autoFocus = true;
			}
			var codeMirrorTableCell = new codeMirrorConstructor(td, options);
		})
	};

	return insert;
});

//create an external table widget
//It's actually a table, but each cell is a GDC
//Then we can just fire events on it, maybe make a GDC inline/barebones
//This will be passed a height, and if that height changes then it'll resize itself, fire heightchanged event and then the master GDC will take care of resizing the table cell