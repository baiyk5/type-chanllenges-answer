// For example:
interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
title: "Hey",
description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property


// 实现代码

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}