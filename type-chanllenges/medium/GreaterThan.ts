// For example:

type a = MyGreaterThan<2, 1> //should be true
type b = MyGreaterThan<10, 100> //should be false
type c = MyGreaterThan<1, 1> //should be false
type d = MyGreaterThan<111, 11> //should be true

// 实现代码

type MyGreaterThan<A extends number, B extends number, R extends number[] = []> = 
    A extends R['length'] ? false 
    : B extends R['length'] ? true : MyGreaterThan<A, B, [...R, 1]>

/**
 * 思路
 * ts没有计算能力，因此需要内置一个空数组R，使用递归，判断A和B谁先追上R['length']，先追上的就比较小
 */