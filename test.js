import test from 'ava';
import sinon from 'sinon';
import m from '.';

const addUnicorn = async str => `${str} Unicorn`;
const addRainbow = str => Promise.resolve(`${str} Rainbow`);
const addNonPromise = str => `${str} Foo`;

test('p-pipe', async t => {
	const single = m(addUnicorn);
	t.is(await single('❤️'), '❤️ Unicorn');

	const multi = m(addUnicorn, addRainbow);
	t.is(await multi('❤️'), '❤️ Unicorn Rainbow');

	const mixed = m(addNonPromise, addUnicorn, addRainbow);
	t.is(await mixed('❤️'), '❤️ Foo Unicorn Rainbow');

	const array = m(...[addUnicorn, addRainbow]);
	t.is(await array('❤️'), '❤️ Unicorn Rainbow');
});

test('is lazy', async t => {
	const spy = sinon.spy();
	const fn = m(spy);

	t.false(spy.called);

	await fn('❤️');

	t.true(spy.called);
});

test('throws', async t => {
	const whoops = async () => {
		throw new Error('💔');
	};

	const fn = async () => m(whoops)('🧐');
	await t.throwsAsync(fn, Error, '💔');
});

test('immediately stops on error', async t => {
	const one = sinon.spy();
	const two = sinon.stub().throws('😭');
	const three = sinon.spy();

	const fn = async () => m(one, two, three)('🧐');
	await t.throwsAsync(fn);

	t.true(one.called);
	t.true(two.called);
	t.false(three.called);
});

test('requires at least one input', t => {
	const error = t.throws(() => m(), Error);
	t.is(error.message, 'Expected at least one argument');
});
