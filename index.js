'use strict';

// TODO: use rest/spread when targeting Node.js 6

module.exports = function () {
	const args = [].slice.apply(arguments);

	if (args.length === 0) {
		return Promise.reject(new Error('Expected at least one argument'));
	}

	return args.slice(1).reduce((a, b) => {
		return function () {
			return Promise.resolve(a.apply(null, arguments)).then(b);
		};
	}, args[0]);
};
