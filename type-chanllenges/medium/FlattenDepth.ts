// For example:

type a = MyFlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = MyFlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// 实现代码

type MyFlattenOnce<T extends any[], U extends any[] = []> = T extends [infer X, ...infer Y] ? (
    X extends any[] ? MyFlattenOnce<Y, [...U, ...X]> : MyFlattenOnce<Y, [...U, X]>
  ) : U
  
  type MyFlattenDepth<
    T extends any[],
    U extends number = 1,
    P extends any[] = []
  > = P['length'] extends U ? T : (
    MyFlattenOnce<T> extends T ? T : (
        MyFlattenDepth<MyFlattenOnce<T>, U, [...P, any]>
    )
  )

/**
 * 完全没思路，主要在于不知道怎么判断调用递归的次数
 * 参考答案中得知：
 * 1、设置一个空数组，用该数组的长度来判断调用次数， P['length'] extends U 表示满足次数要求。
 * 2、同时需要一个单次拍平的api， 多次则需要递归调用单次的即可。
 */