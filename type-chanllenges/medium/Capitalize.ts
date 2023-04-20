// For example:

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'

// 实现代码

type MyCapitalize<T extends string> = 
    T extends `${infer K}${infer T}` 
    ? `${Uppercase<K>}${T}` 
    : never

/**
 * 知识点
 * 1、用模板字符串解构字符串，infer取出首字母 进行大写替换
 */