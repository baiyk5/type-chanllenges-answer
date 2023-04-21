// For example:

type result = MyNumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

// 实现代码

type LengthTo<N extends number, R extends any[] = []> =
  R['length'] extends N ? R : LengthTo<N, [0, ...R]>

type MyNumberRange<L extends number, H extends number, U extends any[] = LengthTo<L>, R extends number = never> =
  U['length'] extends H ? (
    R | U['length']
  ) : (
    MyNumberRange<L, H, [0, ...U], R | U['length']>
  )

/** 
 * 有点思路但不多。。。还是看参考答案。。
 * 递归加多个辅助变量, R为存储输出结果的辅助变量
 * 抽出来一个LengthTo 函数，传入长度N，返回一个长度为 N 的数组
 */