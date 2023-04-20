/**
 * For example:
 */
type Foo = {
    a: string;
    b: number;
}
type Bar = {
    a: string;
    c: boolean
}
  
type Result1 = MyDiff<Foo,Bar> // { b: number, c: boolean }
type Result2 = MyDiff<Bar,Foo> // { b: number, c: boolean }

/**
 * 实现代码
 */

type MyDiff<A extends object, B extends object> = {
    [P in Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>]: P extends keyof A ? A[P] : P extends keyof B ? B[P] : never
}

/**
 * 我的思路：
 * Exclude 获取 存在A不存在B的 和 存在B不存在A的 key值集合
 * 用联合符号获取集合并遍历，判断P若存在于A中，则输出A[P]；
 * 否则则判断是否存在B中，存在则取B[P]，都没有则不取，never
 */