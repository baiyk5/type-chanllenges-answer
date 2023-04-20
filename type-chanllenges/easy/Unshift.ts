/**
 * For example:
 */

type Result = MyUnshift<[1, 2], 0> // [0, 1, 2,]

/**
 * 实现代码
 */

type MyUnshift<T extends any[], P> = [ P, ...T]

/**
 * ...拓展运算符拼接
 */