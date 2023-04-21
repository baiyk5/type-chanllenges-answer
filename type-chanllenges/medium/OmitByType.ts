// For example:

type OmitBoolean = MyOmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { name: string; count: number }


// 实现代码

type MyOmitByType<T, P> = {
    [K in keyof T as T[K] extends P ? never : K]: T[K];
}

/**
 * K in keyof T 获取key值， 然后定义T[K]类型
 * 判断T[K]和P类型是否相等，相等剔除；不相等则输出
 */