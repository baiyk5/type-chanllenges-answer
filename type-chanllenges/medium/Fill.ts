// For example:

type exp = MyFill<[1, 2, 3], 0> // expected to be [0, 0, 0]

// 实现代码
// 参考答案
type MyFill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  I extends any[] = [],
  Flag extends boolean = I['length'] extends Start ? true : false
> = I['length'] extends End
  ? T
  : T extends [infer F, ...infer R]
  ? Flag extends false
  ? [F, ...MyFill<R, N, Start, End, [...I, 0]>]
  : [N, ...MyFill<R, N, Start, End, [...I, 0], Flag>]
  : T
/**
 * ...完全没有思路
 * 看了答案：
 * 1、fill函数 还有start和end入参，默认从第一个位置到最后一个位置做替换
 * 2、定义一个 I 表示当前递归的下标
 * 3、一个标记变量Flag表示是否到了要替换的下标
 * 4、如果当前标记变量Flag为 true 就采用替换值 N，执行替换，否则就拿原本的第一个字符
 * 5、要注意标记变量Flag在 I 长度超过 Start 后就判定失败了，为了让超过后维持 true，在 Flag 为 true 时将其传入覆盖后续值即可。
 */ 