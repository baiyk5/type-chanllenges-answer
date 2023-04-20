/**
 * For example:
 */

const foo = (arg1: string, arg2: number, arg3: boolean): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

/**
 * 实现代码
 */

type MyParameters<T> = T extends (...args: infer K) => any ? K : never

/**
 * infer推导传入参数的类型，直接输出
 */