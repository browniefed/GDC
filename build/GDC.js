/*
	
	GDC - v0.1.0 - 2014-01-02
	==============================================================
	
	Licensed WTFPL

*/

(function ( global ) {



var GDC__GDC = function () {
        
        var GDC = function (codemirror, el) {
            this._codemirror = codemirror;
            this.codemirror = codemirror.fromTextArea(el);
        };
        return GDC;
    }();
var circular = function () {
        
        return [];
    }();
var GDC = function (GDC, circular) {
        
        while (circular.length) {
            circular.pop()();
        }
        return GDC;
    }(GDC__GDC, circular);
// export as Common JS module...
if ( typeof module !== "undefined" && module.exports ) {
	module.exports = GDC;
}

// ... or as AMD module
else if ( typeof define === "function" && define.amd ) {
	define( function () {
		return GDC;
	});
}

// ... or as browser global
else {
	console.log('global');
	global.GDC = GDC;
}

}( typeof window !== 'undefined' ? window : this ));