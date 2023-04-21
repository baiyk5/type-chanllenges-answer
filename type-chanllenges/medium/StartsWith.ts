// For example:

type a = MyStartsWith<'abc', 'ac'> // expected to be false
type b = MyStartsWith<'abc', 'ab'> // expected to be true
type c = MyStartsWith<'abc', 'abcd'> // expected to be false

// 实现代码

type MyStartsWith<A extends string, B extends string> = 
    A extends `${B}${infer Rest}` ? true : false 
/**
 * 尝试使用解构 将B值直接作为A值的前部分，以此来判断字符串A是否包含B。
 */