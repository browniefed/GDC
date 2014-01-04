define(['GDC/prototype/hasFocus', 'GDC/prototype/events/on', 'GDC/prototype/events/off', 'GDC/prototype/events/fire'], function(hasFocus, on, off, fire) {

	'use strict';

	return {
		hasFocus: hasFocus, 
		on: on,
		off: off,
		fire: fire
	};
});