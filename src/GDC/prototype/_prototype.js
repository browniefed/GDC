define(['hasFocus', 'events/on', 'events/off', 'events/fire'], function(hasFocus, on, off, fire) {

	'use strict';

	return {
		hasFocus: hasFocus, 
		on: on,
		off: off,
		fire: fire
	};
});