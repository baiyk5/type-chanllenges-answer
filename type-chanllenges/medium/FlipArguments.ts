// For example:

type Flipped = MyFlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

// 实现代码

type MyReverse<T extends any[]> = 
    T extends [...infer M, infer N] ? [N, ...MyReverse<M>] : T

type MyFlipArguments<T extends Function> = 
    T extends (...arg: infer U) => infer Result ? (...arg: MyReverse<U> ) => Result : never

 
/**
 * 上一题得知MyReverse做反向数据，用infer获取入参类型和结果类型， 通过MyReverse输出相反结果。
 */