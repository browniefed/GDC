define(['GDC/_GDC', 'circular'], function(GDC, circular) {
	'use strict'

	while (circular.length) {
		circular.pop()();
	}

	return GDC;

})