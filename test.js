import test from 'ava';
import m from '.';

const addUnicorn = str => Promise.resolve(`${str} Unicorn`);
const addRainbow = str => Promise.resolve(`${str} Rainbow`);
const addNonPromise = str => `${str} Foo`;

test(async t => {
	const single = m(addUnicorn);
	t.is(await single('❤️'), '❤️ Unicorn');

	const multi = m(addUnicorn, addRainbow);
	t.is(await multi('❤️'), '❤️ Unicorn Rainbow');

	const mixed = m(addNonPromise, addUnicorn, addRainbow);
	t.is(await mixed('❤️'), '❤️ Foo Unicorn Rainbow');

	const array = m([addUnicorn, addRainbow]);
	t.is(await array('❤️'), '❤️ Unicorn Rainbow');
});
