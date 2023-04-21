// For example:

type Res1 = MyLastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = MyLastIndexOf<[0, 0, 0], 2> // -1

// 实现代码
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type MyLastIndexOf<T extends any[], U extends number> = 
    T extends [...infer Rest, infer Last] 
    ? Equal<Last, U> extends true ? Rest['length'] : MyLastIndexOf<Rest, U> : -1

/** 
 * 我的思路
 * 同indexOf 只不过是从最后一个元素查找起， 解构拆解数组，最后一个元素和入参U比较是否一致， 一致则输出前部分数组的长度即为下标index
 * 不一致的话继续递归查找index 如果都没有则返回-1
 */