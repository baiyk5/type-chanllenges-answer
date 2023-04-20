/**
 * For example:
 */

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'  联合类型


/**
 * 实现代码
 */

type MyExclude<T, P> = T extends P ? never : T 

/**
 * T extends P 判断是否P存在于T中 存在的话返回never移除，否则返回T
 */