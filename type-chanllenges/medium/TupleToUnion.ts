/**
 * For example:
 */

type Arr = ['1', '2', '3']

type Test = MyTupleToUnion<Arr> // expected to be '1' | '2' | '3'
/**
 * 实现代码
 */

type MyTupleToUnion<T extends any[]> = T[number]

/**
 * T[number]输出元组的每一项元素
 */