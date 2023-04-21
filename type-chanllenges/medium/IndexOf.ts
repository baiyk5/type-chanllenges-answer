// For example:

type Res = MyIndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = MyIndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res2 = MyIndexOf<[0, 0, 0], 2>; // expected to be -1

// 实现代码

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type MyIndexOf<T extends any[], U extends number, Index extends any[] = []> = 
    T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? Index['length'] : MyIndexOf<Rest, U, [...Index, 1]> : -1
/**
 * 此题也比较好理解
 * 设置空数组，利用其长度，也就是递归次数来体现index
 * 解构拆分第一个元素，将其与U比较，相等时则输出当前index（的长度）
 * 若不等，继续递归处理，传入index长度+1， 都没找到，则返回-1
 */