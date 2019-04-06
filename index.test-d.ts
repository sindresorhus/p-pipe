import {expectType} from 'tsd';
import pPipe = require('.');

const fn = async (string: string) => `${string} Unicorn`;

const identity = <T>(value: T) => value;
const toNumber = (string: string) => parseInt(string);
const toFixed = (number: number) => number.toFixed(2);

expectType<Promise<string>>(pPipe(fn)('❤️'));
expectType<Promise<string>>(pPipe(toNumber, toFixed)('❤️'));

expectType<Promise<string>>(pPipe(fn, identity, identity)('❤️'));
expectType<Promise<string>>(pPipe(fn, identity, identity, identity)('❤️'));
expectType<Promise<string>>(
	pPipe(fn, identity, identity, identity, identity)('❤️')
);
expectType<Promise<string>>(
	pPipe(fn, identity, identity, identity, identity, identity)('❤️')
);
expectType<Promise<string>>(
	pPipe(fn, identity, identity, identity, identity, identity, identity)('❤️')
);
expectType<Promise<string>>(
	pPipe(
		fn,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity
	)('❤️')
);
expectType<Promise<string>>(
	pPipe(
		fn,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity
	)('❤️')
);

expectType<unknown>(
	pPipe(
		fn,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity,
		identity
	)('❤️')
);

// "Complex" examples
const byPowerOfTwo = (number: number) => number ** 2;
const asResult = async <T>(result: T) => ({result});
const either = async (number: number) => (number > 2 ? number : '🤪');
const count = (number: number) => [...Array(number).keys()];

expectType<Promise<{result: string}>>(
	pPipe(byPowerOfTwo, toFixed, asResult)(2)
);
expectType<Promise<{result: number | string}>>(
	pPipe(byPowerOfTwo, either, asResult)(2)
);
expectType<Promise<number[]>>(pPipe(byPowerOfTwo, count)(2));
