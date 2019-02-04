import test from 'ava';
import sinon from 'sinon';
import pPipe from '.';

const addUnicorn = async string => `${string} Unicorn`;
const addRainbow = string => Promise.resolve(`${string} Rainbow`);
const addNonPromise = string => `${string} Foo`;

test('main', async t => {
	const single = pPipe(addUnicorn);
	t.is(await single('❤️'), '❤️ Unicorn');

	const multi = pPipe(addUnicorn, addRainbow);
	t.is(await multi('❤️'), '❤️ Unicorn Rainbow');

	const mixed = pPipe(addNonPromise, addUnicorn, addRainbow);
	t.is(await mixed('❤️'), '❤️ Foo Unicorn Rainbow');

	const array = pPipe(...[addUnicorn, addRainbow]);
	t.is(await array('❤️'), '❤️ Unicorn Rainbow');
});

test('is lazy', async t => {
	const spy = sinon.spy();
	const fn = pPipe(spy);

	t.false(spy.called);

	await fn('❤️');

	t.true(spy.called);
});

test('throws', async t => {
	const whoops = async () => {
		throw new Error('💔');
	};

	const fn = async () => pPipe(whoops)('🧐');
	await t.throwsAsync(fn, '💔');
});

test('immediately stops on error', async t => {
	const one = sinon.spy();
	const two = sinon.stub().throws('😭');
	const three = sinon.spy();

	const fn = async () => pPipe(one, two, three)('🧐');
	await t.throwsAsync(fn);

	t.true(one.called);
	t.true(two.called);
	t.false(three.called);
});

test('requires at least one input', t => {
	t.throws(() => {
		pPipe();
	}, 'Expected at least one argument');
});
