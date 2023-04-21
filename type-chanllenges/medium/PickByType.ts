// For example:

type OnlyBoolean = MyPickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

// 实现代码

type MyPickByType<T, P> = {
    [K in keyof T as T[K] extends P ? K : never]: T[K];
}
 
/**
 * 和pick相似， 用K in keyof T 来获取K值，判断T[K]是否存在于传入类型P中，符合输出，否则never终止
 */