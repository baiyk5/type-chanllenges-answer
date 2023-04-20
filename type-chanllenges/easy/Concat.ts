/**
 * For example:
 */

type Result = MyConcat<[1], [2]> // expected to be [1, 2]


/**
 * 实现代码
 */

type MyConcat<T extends any[], P extends any[]> = [...T, ...P]

/**
 * ...拓展运算符拼接
 */