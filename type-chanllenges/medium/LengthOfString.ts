// For example:

type len = MyStringLength<'ABCSDSWESDS'>; // 11


// 实现代码

type MyStringLength<S extends string, T extends any[] = []> =
    S extends `${infer K}${infer Rest}` 
    ? MyStringLength<Rest, [...T, K]> 
    : T['length']

/**
 * 思路如下
 * 1、设置一个空数组 用来存放每个字符串（想不到的地方）
 * 2、利用递归循环放置
 * 3、全部放置完后 利用T[length]获取数组长度
 */