// For example:

type replaced = MyReplace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

// 实现代码

type MyReplace<T, K extends string, V extends string> = 
    T extends `${infer Left}${K}${infer Right}`
    ? `${Left}${V}${Right}`
    : T

/**
 * 知识点
 * 1、用模板字符串解构字符串, 取出K替换成V
 */