// For example:

type exp = MyZip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

// 实现代码

type MyZip<
    T extends number[], 
    U extends boolean[],
    I extends number[] = [],
    R extends any[] = []
    > = I['length'] extends T['length'] ? R // 长度是否相等
    : U[I['length']] extends undefined // 是否
    ? MyZip<T, U, [...I, 0], R>
    : MyZip<T, U, [...I, 0], [...R, [T[I['length']], U[I['length']]]]>
    

/**
 * 没有思路（好难，看参考答案）
 * 配合辅助变量，进行计数递归，并额外用一个类型变量存储结果
 */