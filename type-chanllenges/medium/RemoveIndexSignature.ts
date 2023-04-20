/**
 * For example:
 */

type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = MyRemoveIndexSignature<Foo>  // expected { foo(): void }

/**
 * 实现代码
 */

type MyRemoveIndexSignature<T extends object> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K]
}

/**
 * 思路如下：
 * 判断出类型为string、number、symbol的为索引值，命中后剔除
 * 参考答案中 ${infer P}来直接推导类型，同时in keysof T来逐个遍历是否属于下标
 */

