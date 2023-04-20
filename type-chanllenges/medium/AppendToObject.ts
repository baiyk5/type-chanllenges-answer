// For example:

type Test = { id: '1' }
type Result = MyAppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

// 实现代码

type MyAppendToObject<T extends object, K extends number | string | symbol, V> = {
    [P in keyof T | K] : P extends keyof T ? T[P] : V
}

/**
 * 知识点
 * 1、利用 | 把原始对象和新Key结合成新对象
 * 2、P extends keyof T 判断是否为原对象中的key值 不是的话为新增添的值
 */