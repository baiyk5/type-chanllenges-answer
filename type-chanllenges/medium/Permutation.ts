// For example:

type perm = MyPermutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']


// 实现代码

type MyPermutation<T, K = T> = 
    [T] extends [never] ? [] : T extends K ? [T, ...MyPermutation<Exclude<K, T>>] : []

/**
 * 借鉴参考答案：（确实难。。完全没想到）
 * 知识点
 * 1、联想之前做的Exclude,采用分配律 递归触发联合类型分配律
 * 2、之前的Exclude里使用分配律是有两个入参泛型，而题目只有一个，所以我们只能自己创造一个，使用K=T
 */