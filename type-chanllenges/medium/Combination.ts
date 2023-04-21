// For example:

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>
// 实现代码

type MyCombination<T extends string[], U extends string = T[number]> = 
    [U] extends [never] ? '' 
    : '' | {[K in U] : `${K} ${MyCombination<never, Exclude<U, K>>}` }[U]

type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T

type Combination<T extends string[]> = TrimRight<Exclude<MyCombination<T>, ''>>

/** 
 * 这题和AllCombinations类似
 * 1、数组转换为联合类型T[number]
 * 2、利用 Exclude 和TrimRight 删除多余的空格。  
 */