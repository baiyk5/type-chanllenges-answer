// For example:
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

// 实现代码

type MyPick<T, P> = {
    [K in keyof T as K extends P ? K : never]: T[K];
}
 
/**
 * K in keyof T 获取key 
 * 通过 T[K] extends never 这种方式判断是否有值
 */