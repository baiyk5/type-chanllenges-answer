// For example:

type a = MyTupleToNestedObject<['a'], string> // {a: string}
type b = MyTupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = MyTupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

// 实现代码

type MyTupleToNestedObject<T extends any[], U extends string | number | boolean, R = U> = 
    T extends [] ? R : (
        T extends [...infer Rest, infer Last extends PropertyKey] ? (
            MyTupleToNestedObject<Rest, U, {
            [P in Last]: R
        }>
        ) : never
    )


/**
 * 好难 T T
 * 参考答案知识点：
 * 1、递归、辅助类型、infer、in Key、PropertyKey（PropertyKey限制一下入参问题）
 */