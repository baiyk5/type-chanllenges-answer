// For example:

type replaced = MyReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

// 实现代码

type MyReplaceAll<T, K extends string, V extends string> =
    T extends `${infer Left}${K}${infer Right}`
    ? `${Left}${V}${MyReplaceAll<`${Right}`, K, V>}`
    : T

/**
 * 知识点
 * 1、用模板字符串解构字符串, 取出K替换成V，在递归查找替换
 */