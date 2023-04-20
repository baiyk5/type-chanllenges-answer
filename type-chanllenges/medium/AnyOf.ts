/**
 * For example:
 */

type Sample1 = MyAnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = MyAnyOf<[0, '', false, [], {}]> // expected to be false.

/**
 * 实现代码
 */

type isFalse = 0 | '' | false | [] | never | undefined | null | Record<PropertyKey, never>
type MyAnyOf<T extends readonly any[]> = T extends isFalse[] ? false : true
/**
 * 知识点：
 * {}不能代表空对象，{}代表的是所有对象类型，{ a: 1 } extends {} 结果为真。所以要用Record<PropertyKey, never>以锁定空对象 **
 */