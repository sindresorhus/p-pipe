import {expectType} from 'tsd-check';
import pipe from '.';

const unary = async (string: string) => `${string} Unicorn`;
const binary = async (string: string, number: number) => unary(string.repeat(number));
const ternary = async (string: string, number: number, boolean: boolean) => boolean ? binary(string, number) : unary(string);

const identity = <T>(value: T) => value;
const toNumber = (string: string) => parseInt(string);
const toFixed = (number: number) => number.toFixed(2);

// Unray
expectType<string>(await pipe(unary)('❤️'));
expectType<string>(await pipe(toNumber, toFixed)('❤️'));

expectType<string>(await pipe(unary, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity, identity, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity, identity, identity, identity, identity)('❤️'));
expectType<string>(await pipe(unary, identity, identity, identity, identity, identity, identity, identity, identity)('❤️'));

expectType<unknown>(await pipe(unary, identity, identity, identity, identity, identity, identity, identity, identity, identity)('❤️'));

// Binary
expectType<string>(await pipe(binary)('❤️', 3));
expectType<number>(await pipe(binary, toNumber)('❤️', 10));

expectType<string>(await pipe(binary, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity, identity, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity, identity, identity, identity, identity)('❤️', 3));
expectType<string>(await pipe(binary, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 3));

expectType<unknown>(await pipe(binary, identity, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 12));

// Tertary
expectType<string>(await pipe(ternary)('❤️', 3, true));
expectType<number>(await pipe(ternary, toNumber)('❤️', 10, false));

expectType<string>(await pipe(ternary, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 3, true));

expectType<unknown>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 12, false));

// "Complex" examples
const sq = (number: number) => number ** 2;
const asResult = async <T>(result: T) => ({result});
const either = async (number: number) => number > 2 ? number : '🤪';
const count = (number: number) => [...Array(number).keys()];

expectType<{ result: string }>(await pipe(sq, toFixed, asResult)(2));
expectType<{ result: number | string }>(await pipe(sq, either, asResult)(2));
expectType<number[]>(await pipe(sq, count)(2));
