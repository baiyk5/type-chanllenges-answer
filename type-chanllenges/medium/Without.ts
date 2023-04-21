// For example:

type Res = MyWithout<[1, 2], 1>; // expected to be [2]
type Res1 = MyWithout<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = MyWithout<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []// 实现代码

type ArrayToUnion<T> = T extends any[] ? T[number] : T

type MyWithout<T extends any[], U> = 
    T extends [infer First, ...infer Rest]
    ? First extends ArrayToUnion<U> ? MyWithout<Rest, U> : [First, ...MyWithout<Rest, U>] 
    : T
    
/**
 * 思路大致如下：
 * 1、参数 U 可能是字符串或字符串数组
 * 2、每次取数组第一项，判断是否被 U 包含，是的话就剔除，否则包含（包含的动作是形成新的数组 [First, ...] 并把递归内容解构塞到后面）。
 */