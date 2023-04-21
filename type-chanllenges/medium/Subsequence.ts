// For example:

type A = MySubsequence<[1, 2]> // [] | [1] | [2] | [1, 2]


// 实现代码

type MySubsequence<T extends number[]> = 
    T extends [infer F, ...infer R extends number[]] ?
    MySubsequence<R> | [F, ...MySubsequence<R>] : T

/** 
 * 解构获取T，只要每次取第一项，与剩余项的递归构造出结果，联合符号 | 上剩余项本身递归的结果就可以了。 
 */