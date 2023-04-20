// For example:

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = MyLength<tesla>  // expected 4
type spaceXLength = MyLength<spaceX> // expected 5


// 实现代码

type MyLength<T extends readonly any[]> = T['length']

/**
 * 一定要约束T为数组类型 才会有length属性
 * infer first 获取的是第一个元素的类型
 * 如果T是某个待推断类型的数组，则返回推断的类型，否则返回T
 */