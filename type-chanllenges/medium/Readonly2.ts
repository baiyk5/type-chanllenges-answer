/**
 * For example:
 */
interface Todo {
    title: string
    description: string
    completed: boolean
}
  
const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}
  
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK


/**
 * 实现代码
 */

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>
/**
 * 因为readonly必须定义在Key位置，但又没法在这个位置做三元判断，所以利用组合api实现 
 * 先Pick出K的Key部分设置为Readonly，再用 & 合并上剩下的Key，正好用到上一题的函数的Omit效果。
 * === 拼接 key值 可以用 && 符号 === 学到了
 */