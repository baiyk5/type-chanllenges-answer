// For example:

type case1 = MyIsTuple<[number]> // true
type case2 = MyIsTuple<readonly [number]> // true
type case3 = MyIsTuple<number[]> // false

// 实现代码

// #1 我的
type MyIsTuple<T extends any[] | readonly any[]> =  number extends T['length'] ? false : true

// #2 参考答案
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
  ? false
  : true
  : false

/**
 * 主要思路是
 * Tuple 与 Array 在 TS 里的区别是前者长度有限，后者长度无限，从结果来看，如果访问
 * 其 ['length'] 属性，前者一定是一个固定数字，而后者返回 number，用这个特性判断即可
 * 这个还是根据case里测试出来的IsTuple<{ length: 1 }> 单测用例，它可以通过 number extends T['length']
 * 的校验，但因为其本身不是数组类型，所以无法通过 T extends readonly any[] 的前置判断
 * 然后入参时要考虑下never的可能性，用[never]跳过never不做判断的特性
 * 
 * tips:
 * 元组和数组的概念是不同的:
 * 数组 - number[] 约束好数组中的类型，类型不对会导致IDE和编译出错
 * 元组 - [number, string, boolean, number] 一开始就约束好数组的个数和其中对应元素的类型，不一致则会报错
 */ 