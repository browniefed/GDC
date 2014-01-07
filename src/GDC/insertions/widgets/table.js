define(['GDC/utils/tableFuncs'], function(tableUtils) {

	"use strict";

	function Table(cellsX, cellsY) {
		this.DOMEle = tableUtils.tableCreate(cellsX, cellsY);
		this.tableCells = [];
	};

	Table.prototype.getDOM = function() {
		return this.DOMEle;
	};

	Table.prototype.setWidget = function(widget) {
		this.widget = widget;
	};

	Table.prototype.initTableCells = function(codeMirrorConstructor) {
		var tds = this.widget.node.querySelectorAll('td'),
			tdCMs = [];
		_(tds).forEach(function(td, index) {
			tdCMs.push(new codeMirrorConstructor(td));
		});
		this.tableCells = tdCMs;
	};

	Table.prototype.destroy = function() {
		this.widget.clear();
	};

	Table.prototype.addStyle = function(style) {
		_(this.tableCells).each(function(cell) {
			cell.fire(style);
		});
	};

	return Table;

});