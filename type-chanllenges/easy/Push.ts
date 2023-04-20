/**
 * For example:
 */

type Result = MyPush<[1, 2], '3'> // [1, 2, '3']


/**
 * 实现代码
 */

type MyPush<T extends any[], P> = [...T, P]

/**
 * ...拓展运算符拼接
 */