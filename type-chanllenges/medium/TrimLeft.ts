// For example:

type trimed = MyTrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// 实现代码

type MyTrimLeft<T extends string> = 
    T extends `${" "}${infer Rest}`
    ? MyTrimLeft<Rest>
    : T;

/**
 * 知识点
 * 1、用模板字符串解构字符串，利用递归去除左侧空字符
 */