'use strict';

module.exports = (...inputs) => {
	if (inputs.length === 0) {
		return Promise.reject(new Error('Expected at least one argument'));
	}

	const iterator = inputs[Symbol.iterator]();

	const loop = async current => {
		const {done, value} = iterator.next();

		if (done) {
			return current;
		}

		const next = await value(current);
		return loop(next);
	};

	return loop;
};
