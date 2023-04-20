/**
 * For example:
 */

type case1 = MyIsUnion<string>  // false
type case2 = MyIsUnion<string|number>  // true
type case3 = MyIsUnion<[string|number]>  // false

/**
 * 实现代码
 */

/**
 * 知识点
 * 难点在于如何判断传入A为联合类型
 * 参考答案得知，要利用包裹 [] 不分发的特性，来判断是否为联合类型
 */

// #1
type MyIsUnion<A, B = A> = 
    A extends A 
    ? ( [B] extends [A] ? false : true) 
    : false