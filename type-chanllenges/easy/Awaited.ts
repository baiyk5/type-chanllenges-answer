/**
 * For example:
 */

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string


/**
 * 实现代码
 */

type MyAwaited<T> = T extends Promise<(infer U)> ? MyAwaited<U> : T

/**
 * 用infer推导类型
 */