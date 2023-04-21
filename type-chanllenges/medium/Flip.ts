// For example:

type a = MyFlip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type b = MyFlip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type c = MyFlip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

// 实现代码

type MyFlip<T extends Record<string, string | number | boolean>> = {
    [K in keyof T as `${T[K]}`]: K
}

/**
 * 知识点：
 * as 定义key值为 T[K],
 * 另外要对T的类型进行定义，通过record内置方法来约束对象中的属性值只能是string|number|boolean类型
 */