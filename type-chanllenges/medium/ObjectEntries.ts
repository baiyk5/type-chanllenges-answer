// For example:

interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = MyObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

// 实现代码

type MyObjectEntries<T> = {
    [K in keyof T]: [K, T[K]]
  }[keyof T]
/**
 * 没有思路
 * 参考答案- ['1', '2', '3']['number'] // '1' | '2' | '3' 获取联合类型可以用数组下标T[number]
 * 对象的方式则是 [keyof T] 作为下标：type ObjectToUnion<T> = T[keyof T]
 */