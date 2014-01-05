define([], function() {

	"use strict";

	return {
		fromRange: function(from, to) {
			return {
				from: _.clone(from),
				to: _.clone(to)
			};

		},
		toRange: function(to, from) {
			return {
				from: _.clone(from),
				to: _.clone(to)
			};
		}
	};
});