// For example:

type a = MyFirstUniqueCharIndex<'leetcode'>   // 0
type b = MyFirstUniqueCharIndex<'loveleetcode'>   // 2

// 实现代码

type getRecordList<T extends string, M extends Record<PropertyKey, unknown[]> = {}> = T extends `${infer F}${infer L}`
  ? F extends keyof M
  ? getRecordList<L, { [P in F]: [...M[F], unknown] } & Omit<M, F>>
  : getRecordList<L, { [P in F]: [unknown] } & M>
  : M

type MyFirstUniqueCharIndex<T extends string, I extends unknown[] = [], M extends Record<PropertyKey, unknown[]> = getRecordList<T>> = T extends `${infer F}${infer L}`
  ? M[F]['length'] extends 1 ? I['length']
  : MyFirstUniqueCharIndex<L, [...I, unknown], M>
  : -1

/** 
 * 没有思路。。看参考答案的
 * 这题利用字符串逐个递归，有点耗性能。在递归之前先把每个字符串出现的次数先保存起来
 * 然后在递归的时候查询getRecordList返回字符串对应当前字符串第一个出现的次数为1的
 * 字符串，如果没有就返回-1
 */