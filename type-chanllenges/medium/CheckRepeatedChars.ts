// For example:

type a = MyCheckRepeatedChars<'abc'>   // false
type b = MyCheckRepeatedChars<'aba'>   // true

// 实现代码

type MyCheckRepeatedChars<T extends string> = 
  T extends `${infer F}${infer Rest extends string}`
    ? Rest extends `${infer A}${F}${infer B}`
    ? true 
    : MyCheckRepeatedChars<Rest>
    : false

/** 
 * 个人思路
 * 将字符串解构出首字符，然后首字符进行判断 是否后部分包含首字符，如果包含则返回true 如果不包含则继续递归，都没有则返回false
 */