// For example:

interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}
  
type MutableTodo = MyMutable<Todo> // { title: string; description: string; completed: boolean; }

// 实现代码

type Merge<T> = {
    [P in keyof T]: T[P]
  }

type MyMutable<T> = {
    -readonly[P in keyof T as P]: T[P]
}

/**
 * -readonly遍历去除
 */