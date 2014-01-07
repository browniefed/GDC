define([], function() {

	"use strict";

	return {
		tableCreate: function(cellsX, cellsY) {
		    var tbl  = document.createElement('table');
		    tbl.style.width='100%';
		    tbl.style.height = '100px';
		    tbl.style.border = "1px solid #000";

		    cellsX = cellsX || 2;
		    cellsY = cellsY || 3;
		    for(var i = 0; i < cellsY; i++){
		        var tr = tbl.insertRow();
		        for(var j = 0; j < cellsX; j++){
	                var td = tr.insertCell();
	                td.style.border = '1px solid #000';
	                td.appendChild(document.createTextNode('\u0020'));
		        }
		    }

			return tbl;
		}
	};
});