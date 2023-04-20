// For example:

type Fn = (a: number, b: string) => number

type Result = MyAppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number

// 实现代码
// #1
type MyAppendArgument<Fn, A extends boolean> = 
    Fn extends (...args: infer T) => infer K 
    ? (...args: [...T, A]) => K :
    Fn

/**
 * 知识点
 * 1、用 (...args: infer T) => infer K   获取T是入参的推导类型， 获取K为Fn返回类型
 * 2、用[...T, A] 拼接入参， 返回原Fn返回类型
 */