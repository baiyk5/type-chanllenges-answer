// For example:

type A = MyTrunc<12.34> // 12


// 实现代码

type MyTrunc<T extends number | string> = `${T}` extends `${infer M}.${infer N}` ? M : T
/**
 * 把他理解为字符串解构就好理解了
 * 首先对入参进行类型约束， number和string才可以处理，同时转化成${T}字符串
 * 然后进行解构，输出整数部分即可
 */