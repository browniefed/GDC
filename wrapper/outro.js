
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