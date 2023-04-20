// For example:
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = MyFirst<arr1> // expected to be 'a'
type head2 = MyFirst<arr2> // expected to be 3


// 实现代码

type MyFirst<T extends any[]> = 
    T extends [infer first, ...any[]] 
    ? first
    : never;


/**
 * infer 只能在条件类型的 extends 子句中使用
 * infer first 获取的是第一个元素的类型
 * 如果T是某个待推断类型的数组，则返回推断的类型，否则返回T
 */