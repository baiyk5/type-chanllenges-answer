// For example:

type flatten = MyFlatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]


// 实现代码

type MyFlatten<T extends any[], K extends any[] = []> = 
    T extends [infer S, ...infer Rest] 
    ? (S extends any[] ? MyFlatten<Rest, [...K, ...MyFlatten<S>]> : MyFlatten<Rest, [...K, S]>) 
    : K

/**
 * 知识点
 * 1、参考lengthOfString 内置空数组用来存放
 * 2、利用递归的思路：
 *    如果第一个值不是数组，则直接存进去继续递归
 *    如果第一个值是数组，则拍平后继续递归
 */