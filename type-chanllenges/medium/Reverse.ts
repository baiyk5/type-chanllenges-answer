// For example:

type a = MyReverse<['a', 'b']> // ['b', 'a']
type b = MyReverse<['a', 'b', 'c']> // ['c', 'b', 'a']

// 实现代码

type MyReverse<T extends any[]> = 
    T extends [...infer M, infer N] ? [N, ...MyReverse<M>] : T

/**
 * 解构数组得到最后的元素，利用递归得出结果
 */