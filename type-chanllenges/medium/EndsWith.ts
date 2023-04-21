// For example:

type a = MyEndsWith<'abc', 'bc'> // expected to be true
type b = MyEndsWith<'abc', 'abc'> // expected to be true
type c = MyEndsWith<'abc', 'd'> // expected to be false

// 实现代码

type MyEndsWith<A extends string, B extends string> = 
    A extends `${infer Rest}${B}` ? true : false 
/**
 * 尝试使用解构 将B值直接作为A值的前部分，以此来判断字符串A是否包含B。
 */