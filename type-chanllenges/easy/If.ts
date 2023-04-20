/**
 * For example:
 */

type A = MyIf<true, 'a', 'b'>  // expected to be 'a'
type B = MyIf<false, 'a', 'b'> // expected to be 'b'


/**
 * 实现代码
 */

type MyIf<T, K, P> = T extends true ? K : P

/**
 * extends用来判定值，用extends true 判断是否命中了入参要求，命中输出K, 否则输出P
 */