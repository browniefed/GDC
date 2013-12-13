(function ( global ) {



var GDC__GDC = function () {
        
        var GDC = function () {
            console.log('hey');
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
	global.GDC = GDC;
}

}( typeof window !== 'undefined' ? window : this ));