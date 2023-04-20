/**
 * For example:
 */

type Test = '123';
type Result = MyStringToUnion<Test>; // expected to be "1" | "2" | "3"


/**
 * 实现代码
 */

type MyStringToUnion<T extends string, K extends any[] = []> = 
    T extends `${infer M}${infer N}` 
    ? MyStringToUnion<N, [...K, M]> 
    : K[number]

// #2 - 答案写的
type StringToUnion<T> = T extends `${infer K}${infer S}` ? K | StringToUnion<S> : never

/**
 * 我的思路：
 * 参考 StringLength 设置一个空数组 用来存储每一个字符
 * T[number]输出元组的每一项元素
 */