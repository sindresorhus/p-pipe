import {expectType} from 'tsd-check';
import pipe from '.';

const unary = async (str:string) => `${str} Unicorn`;
const binary = async (str:string, num:number) => unary(str.repeat(num));
const ternary = async (str:string, num:number, bool:boolean) => bool ? binary(str, num) : unary(str);

const identity = <T>(val:T) => val;
const toNum = (str:string) => parseInt(str);
const toFixed = (num:number) => num.toFixed(2);

// Unray
expectType<string>(await pipe(unary)('❤️'));
expectType<string>(await pipe(toNum, toFixed)('❤️'));

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
expectType<number>(await pipe(binary, toNum)('❤️', 10));

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
expectType<number>(await pipe(ternary, toNum)('❤️', 10, false));

expectType<string>(await pipe(ternary, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity)('❤️', 3, true));
expectType<string>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 3, true));

expectType<unknown>(await pipe(ternary, identity, identity, identity, identity, identity, identity, identity, identity, identity)('❤️', 12, false));

// "Complex" examples
const sq = (num:number) => num ** 2;
const asResult = async <T>(result:T) => ({ result });
const either = async (num:number) => num > 2 ? num : '🤪';
const count = (num:number) => [...Array(num).keys()];

expectType<{ result: string }>(await pipe(sq, toFixed, asResult)(2));
expectType<{ result: number | string }>(await pipe(sq, either, asResult)(2));
expectType<number[]>(await pipe(sq, count)(2));
