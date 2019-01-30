/**
 * *Note about the nameing of generics*
 *
 * - `T`: Use when there is only one generic input parameter.
 * - `R`: End result of the function / pipe.
 * - `T<number>`: Used when there are more than one input parameter.
 * - `R<number>`: Result of the n-th function inside the pipe that is passed to the (n+1)-th function.
 */

/**
 * Function which accepts one parameter. Expected to return a `Promise` or value.
 *
 * @param x First parameter.
 */
export type UnaryFunction<T, R> = (x: T) => R | PromiseLike<R>;

/**
 * Function wich accepts two parameters. Expected to return a `Promise` or value.
 *
 * @param x First parameter.
 * @param y Second parameter.
 */
export type BinaryFunction<T1, T2, R> = (x: T1, y:T2) => R | PromiseLike<R>;

/**
 * Function wich accepts three parameters. Expected to return a `Promise` or value.
 *
 * @param x First parameter.
 * @param y Second parameter.
 * @param z Third parameter.
 */
export type TernaryFunction<T1, T2, T3, R> = (x: T1, y:T2, z:T3) => R | PromiseLike<R>;

/**
 * Generic async `function` which can infer its parmeters. Expected to return a `Promise`.
 *
 * @param args Input parameters.
 */
export type Pipeline<T extends any[], R> = (...args:T) => Promise<R>;

/**
 * Returns an async `function` which accepts the same parameters as the first `function` of `input`.
 * When the returned `function` is executed the `input` is sequentially iterated until one of the
 * inputs throws or the last input is fulfilled.
 *
 * @param input Iterated over sequentially when returned `function` is called.
 */
declare function pipe <T, R>(f1:UnaryFunction<T, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R4, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R4, R5, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R4, R5, R6, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R4, R5, R6, R7, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R>): Pipeline<[T], R>;
declare function pipe <T, R1, R2, R3, R4, R5, R6, R7, R8, R>(f1:UnaryFunction<T, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R8>, f9:UnaryFunction<R8, R>): Pipeline<[T], R>;

declare function pipe <T1, T2, R>(f1:BinaryFunction<T1, T2, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R4, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R4, R5, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R4, R5, R6, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R4, R5, R6, R7, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R>): Pipeline<[T1, T2], R>;
declare function pipe <T1, T2, R1, R2, R3, R4, R5, R6, R7, R8, R>(f1:BinaryFunction<T1, T2, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R8>, f9:UnaryFunction<R8, R>): Pipeline<[T1, T2], R>;

declare function pipe <T1, T2, T3, R>(f1:TernaryFunction<T1, T2, T3, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R4, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R4, R5, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R4, R5, R6, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R4, R5, R6, R7, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R>): Pipeline<[T1, T2, T3], R>;
declare function pipe <T1, T2, T3, R1, R2, R3, R4, R5, R6, R7, R8, R>(f1:TernaryFunction<T1, T2, T3, R1>, f2:UnaryFunction<R1, R2>, f3:UnaryFunction<R2, R3>, f4:UnaryFunction<R3, R4>, f5:UnaryFunction<R4, R5>, f6:UnaryFunction<R5, R6>, f7:UnaryFunction<R6, R7>, f8:UnaryFunction<R7, R8>, f9:UnaryFunction<R8, R>): Pipeline<[T1, T2, T3], R>;

// Fallbacks when more than 9 functions are passed as input (not type-safe).
declare function pipe (...fns:UnaryFunction<any, any>[]): Pipeline<[unknown], unknown>;
declare function pipe (...fns:BinaryFunction<any, any, any>[]): Pipeline<[unknown, unknown], unknown>;
declare function pipe (...fns:TernaryFunction<any, any, any, any>[]): Pipeline<[unknown, unknown, unknown], unknown>;

export default pipe;
