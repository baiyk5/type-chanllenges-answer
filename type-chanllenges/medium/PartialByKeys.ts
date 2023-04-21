// For example:

interface User {
    name: string
    age: number
    address: string
}

type UserPartialName = MyPartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

// 实现代码

type Merge<T> = {
    [P in keyof T]: T[P]
  }

type MyPartialByKeys<T, K extends keyof T> = 
    Merge<
        { [P in keyof T as P extends K ? P : never]?: T[P] }
        & { [P in keyof T as P extends K ? never : P]: T[P] }
    >

/**
 * 先用 遍历key值 来获取2个对象， 一个是包含K值，一个剔除K值，
 * 然后用merge合并两个对象的属性值，输出最后结果。
 */