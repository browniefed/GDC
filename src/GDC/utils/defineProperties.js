define(['GDC/utils/defineProperty'], function ( defineProperty) {

	'use strict';

	try {
		try {
			Object.defineProperties({}, { test: { value: 0 } });
		} catch ( err ) {
			// TODO how do we account for this? noMagic = true;
			throw err;
		}

		return Object.defineProperties;
	} catch ( err ) {
		return function ( obj, props ) {
			var prop;
			for ( prop in props ) {
				if ( props.hasOwnProperty( prop ) ) {
					defineProperty( obj, prop, props[ prop ] );
				}
			}
		};
	}
});