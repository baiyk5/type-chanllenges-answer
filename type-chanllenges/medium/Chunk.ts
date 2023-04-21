// For example:

type exp1 = MyChunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = MyChunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = MyChunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]

// 实现代码

type MyChunk<T extends any[], U extends number, Chunked extends any[] = []> = 
    T extends [infer M, ...infer N] 
    ? Chunked['length'] extends U 
    ? [Chunked, ...MyChunk<T, U>] : MyChunk<N, U, [...Chunked, M]>
    : Chunked extends [] ? Chunked : [Chunked]

/**
 * 这里思路直到了一半就断了
 * 知道先要将数组拆分+递归+判断内置存储数组是否与长度相等来判断
 * 但是后续的递归很迷，一下子就乱了
 * 看了参考答案后 最后当 Chunked 为空[]时，就无需成组了
 */ 