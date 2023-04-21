// For example:

type result = MyConstructTuple<2> // expect to be [unknown, unkonwn]

// 实现代码

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type MyConstructTuple<T extends number, R extends any[] = []> = 
    Equal<R['length'], T> extends true ? R : MyConstructTuple<T, [...R, unknown]>
    
/** 
 * 又有可以解出来的题目了
 * 用R空数组来存储需要的数组， 将R的长度和T比较，如果不相等就使用[...R, unknown]递归
 * 如果相等就输出R
 */