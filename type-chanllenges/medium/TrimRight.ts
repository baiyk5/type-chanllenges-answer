// For example:

type Trimed = MyTrimRight<'   Hello World    '> // expected to be '   Hello World'
// 实现代码

type MyTrimRight<T extends string> = 
    T extends `${infer Rest}${" "}` 
    ? MyTrimRight<Rest> : T
/**
 * 终于又回到了能写得出来的题目了
 * infer解构+递归
 */