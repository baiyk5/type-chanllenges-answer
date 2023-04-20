/**
 * For example:
 */

interface Todo {
    title: string
    description: string
    completed: boolean
}
  
type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
const todo: TodoPreview = {
    completed: false,
}
/**
 * 实现代码
 */

type MyExclude<T, U> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = { 
    // 利用 MyExclude 判断key是否存在 存在则排除 并返回never；否则不排除返回T
    [P in MyExclude<keyof T, K>]: T[P] 
}

/** 
 * 与pick相反 pick是抓取符合key值输出，omit是排除key值输出
 * 但使用pick相反实现方式 存在问题
 * type MyOmit<T, K extends keyof T> = {  [P in keyof T]: P extends K ? never : T[P] }
 * 参考文档发现，所以只要P in keyof T 写出来了，后面怎么写都无法将这个Key抹去
 */