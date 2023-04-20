// For example:
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = MyPop<arr1> // expected to be ['a', 'b', 'c']
type re2 = MyPop<arr2> // expected to be [3, 2]


// 实现代码

type MyPop<T extends any[]> = 
    T extends [...infer P, infer last] 
    ? P
    : never;


/**
 * 在解构时使用infer，
 */