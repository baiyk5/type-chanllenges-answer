/**
 * For example:
 */

type FooBarBaz = MyKebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = MyKebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

/**
 * 实现代码
 */

type MyKebabCase<T extends string, S extends string = ''> = 
    T extends `${infer F}${infer K}` 
    ? Uppercase<F> extends F ? MyKebabCase<K, `${S}-${Lowercase<F>}`> 
    : `${MyKebabCase<K, `${S}${F}`>}` 
    : S extends `-${infer D}` 
    ? D extends '' 
    ? '-' 
    : D 
    : S;


/**
 * 知识点：
 * 自定义的第二个参数存储结果，递归遍历字符串
 * 可以使用 Lowercase<F> extends F 只要小写不等于原始值来判断大写
 */