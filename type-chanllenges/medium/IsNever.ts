/**
 * For example:
 */

type A = MyIsNever<never>  // expected to be true
type B = MyIsNever<undefined> // expected to be false
type C = MyIsNever<null> // expected to be false
type D = MyIsNever<[]> // expected to be false
type E = MyIsNever<number> // expected to be false

/**
 * 实现代码
 */

type isNever = never | null | undefined | []

/**
 * 我的写法#1 
 * 但 由于never的特殊性，不会触发extends判断，导致判断无效，因此MyIsNever<never> = never
 * 参考答案了解，常用方法使用包裹一个数组完成
 */

// #1
// type MyIsNever<T> = T extends isNever ? true : false

// #2
type MyIsNever<T> = [T] extends [never] ? true : false