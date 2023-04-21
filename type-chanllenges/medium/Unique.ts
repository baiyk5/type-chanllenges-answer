// For example:

type Res = MyUnique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = MyUnique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = MyUnique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = MyUnique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = MyUnique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

// 实现代码
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// T是否包含U
type Includes<T, U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false

type MyUnique<T, R extends any[] = []> = T extends [infer First, ...infer Rest] ? Includes<R, First> extends true ? MyUnique<Rest, R> : MyUnique<Rest, [...R, First]> : R

/** 
 * 参考答案后得知，可以先写一个api来校验TU的包含关系。
 * 自定义空数组R作为保存去重后的数组。
 * 将数组解构拆分后，先判断R和First的包含关系，若存在 则抛弃First 继续用R递归。
 * 若不存在，则保留First，用[...R, First]递归
 */