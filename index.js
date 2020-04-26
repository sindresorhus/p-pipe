'use strict';

module.exports = (...functions) => {
	if (functions.length === 0) {
		throw new Error('Expected at least one argument');
	}

	return input => {
		let promise = Promise.resolve(input);

		for (const fn of functions) {
			// eslint-disable-next-line promise/prefer-await-to-then
			promise = promise.then(fn);
		}

		return promise;
	};
};
