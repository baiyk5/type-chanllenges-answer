// For example:
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = MyLast<arr1> // expected to be 'c'
type tail2 = MyLast<arr2> // expected to be 1


// 实现代码

type MyLast<T extends any[]> = 
    T extends [...any[], infer last] 
    ? last
    : never;


/**
 * infer 只能在条件类型的 extends 子句中使用, 在解构时把最后一个描述成 infer，
 * infer last 获取的是最后元素的类型，存在则输出
 */