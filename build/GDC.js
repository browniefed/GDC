/*
	
	GDC - v0.1.0 - 2014-01-04
	==============================================================
	
	Licensed WTFPL

*/

(function ( global ) {



var GDC__codemirror = function () {
        
        var CodemirrorManager = function (codemirror) {
            this.codemirror = codemirror;
        };
        CodemirrorManager.prototype.getCodemirror = function () {
            return this.codemirror;
        };
        CodemirrorManager.prototype.getSelection = function () {
        };
        CodemirrorManager.prototype.fromTextArea = function (el) {
            this.codemirror.fromTextArea(el);
        };
        return CodemirrorManager;
    }();
var GDC__GDC = function (CodemirrorManager) {
        
        var GDC = function (codemirror, el) {
            this._codemirror = new CodemirrorManager(codemirror);
            this._codemirror.fromTextArea(el);
        };
        return GDC;
    }(GDC__codemirror);
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