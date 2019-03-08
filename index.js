'use strict';

module.exports = (...iterable) => {
	if (iterable.length === 0) {
		throw new Error('Expected at least one argument');
	}

	return input => {
		const iterator = iterable[Symbol.iterator]();

		const loop = async current => {
			const {done, value} = iterator.next();

			if (done) {
				return current;
			}

			const next = await value(current);
			return loop(next);
		};

		return loop(input);
	};
};
