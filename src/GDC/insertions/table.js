define(['GDC/utils/tableFuncs'], function(tableUtils) {

	"use strict";

	var insert = {},
		codeMirrorInstance,
		codeMirrorConstructor;

	insert.name = 'table';

	function Table(cellsX, cellsY) {
		this.DOMEle = tableUtils.tableCreate(cellsX, cellsY);
		this.tableCells = [];
	};

	Table.prototype.getDOM = function() {
		return this.DOMEle;
	};
	Table.prototype.setWidget = function(widget) {
		this.widget = widget;
	}
	Table.prototype.initTableCells = function() {
		var tds = this.widget.node.querySelectorAll('td'),
			tdCMs = [];
		_(tds).forEach(function(td, index) {
			tdCMs.push(new codeMirrorConstructor(td));
		});
		this.tableCells = tdCMs;
	}

	Table.prototype.destroy = function() {
		this.widget.clear();
	}

	Table.prototype.addStyle = function(style) {
		_.(this.tableCells).each(function(cell) {
			cell.fire(style);
		})
	}

	insert.insertWidget = function() {
		codeMirrorInstance = this._codemirror.getCodemirror();
		codeMirrorConstructor = this._codemirror.codemirror;
		var currentLine = codeMirrorInstance.doc.getCursor(true).line,
			tableInstance = new Table(2, 5);


			tableInstance.setWidget(codeMirrorInstance.addLineWidget(currentLine, tableInstance.getDOM()));
			tableInstance.initTableCells();
			return tableInstance;
	};

	return insert;


});

//create an external table widget
//It's actually a table, but each cell is a GDC
//Then we can just fire events on it, maybe make a GDC inline/barebones
//This will be passed a height, and if that height changes then it'll resize itself, fire heightchanged event and then the master GDC will take care of resizing the table cell