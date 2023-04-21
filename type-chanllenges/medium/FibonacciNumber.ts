// For example:

type Result1 = MyFibonacci<3> // 2
type Result2 = MyFibonacci<8> // 21

// 实现代码

type MyFibonacci<
    T extends number,
    N extends number[] = [1], // N 记录递归次数
    Prev extends number[] = [1], // Prev存储上次数据
    Cur extends number[] = [1], // Cur输出结果
> = 
    N['length'] extends T // 判断递归次数是否等于入参
    ? Prev['length'] // 若相等，直接输出长度
    : MyFibonacci<T, [...N, 1], Cur, [...Prev, ...Cur]> // 否则继续递归

/**
 * 递归时拿 Cur 代替下次的 Prev，用 [...Prev, ...Cur] 代替下次的 Cur，下次的 Cur 符合斐波那契定义。
 */