// For example:
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = MyTupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


// 实现代码

type MyTupleToObject<T extends readonly string[]> = {
    [P in T[number]] : P 
}
 
/**
 * T[number] 是代表 取数组的中值 作为 key, number 是数组下标
 */