// For example:

type Result = MyShift<[3, 2, 1]> // [2, 1]

// 实现代码

type MyShift<T extends any[]> = T extends [] ? [] : T extends [infer M, ...infer N] ? N : never

/**
 * infer 简单解决
 * 记住处理空值状态,入参过滤一下unknown和空数组[]
 */