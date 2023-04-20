/**
 * For example:
 */

type NodeA = {
    type: 'A'
    name: string
    flag: number
}
  
type NodeB = {
    type: 'B'
    id: number
    flag: number
}
  
type NodeC = {
    type: 'C'
    name: string
    flag: number
}

type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = MyReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = MyReplaceKeys<Nodes, 'name', {aa: number}> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
/**
 * 实现代码
 */

// #1
type MyReplaceKeys<A, B, C> = {
    [T in keyof A]: T extends B 
    ? (T extends keyof C ? C[T] : never) 
    : A[T]
}

/**
 * 思路如下：
 * 1、A为联合类型， 先遍历A的Key值T。
 * 2、判断T是否存在于B中，若存在，则判断该T是否与C中的key相同；不存在 则直接输出A[T]
 * 3、若T extends keyof C，代表存在需要替换的类型，则输出要替换的类型；不存在则never终结。
 */

