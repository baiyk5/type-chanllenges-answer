// For example:

type Test = -100;
type Result = MyAbsolute<Test>; // expected to be "100"

// 实现代码

type MyAbsolute<T extends number | string | bigint> = `${T}` extends `-${infer K}` ? `${K}` : `${T}`;

/**
 * 知识点（借鉴参考答案）
 * 通过模板字符串，将数字、Bigint 转换为字符串，并且会自动去除 bigint 中的 _ 和 n，然后通过 infer 去除 - 即可
 */