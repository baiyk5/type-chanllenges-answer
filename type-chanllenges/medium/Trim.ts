// For example:

type trimmed = MyTrim<'  Hello World  '> // expected to be 'Hello World'

// 实现代码
// #1
// type MyTrim<T extends string> = 
//     T extends `${" "}${infer Rest}${" "}`
//     ? MyTrim<Rest>
//     : T;

// #2
type MyTrim<T extends string> = 
    T extends `${" "}${infer Rest}` | `${infer Rest}${" "}`
    ? MyTrim<Rest>
    : T;

/**
 * 知识点
 * 1、用模板字符串解构字符串，利用递归去除
 * 2、使用联合类型兼容更优
 */