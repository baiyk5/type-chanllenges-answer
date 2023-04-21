// For example:

type Res = MyJoin<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = MyJoin<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = MyJoin<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = MyJoin<["o"], "u">; // expected to be 'o'

// 实现代码
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// #1 我的写法
type MyJoin<T extends any[], U extends number | string> = 
    T extends [infer First extends string, ...infer Rest] 
    ? Equal<Rest, []> extends true ?  `${First}` : `${First}${U}${MyJoin<Rest,U>}` : never

// #2 参考答案
type Join<T, U extends string | number, R extends string = ''> = 
    T extends [infer First extends string, ...infer Last] ? R extends '' 
    ? Join<Last, U, `${First}`> : Join<Last, U, `${R}${U}${First}`> : R

/**
 * 我的写法思路
 * 1、将T数组 用解构拆分 ，判断Rest是否为空，如果为空 则直接输出First字符串 如Res3的case一样
 * 2、如果Rest非空数组，则继续递归拼接字符串
 */