// For example:

type AllCombinations_ABC = MyAllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

// 实现代码
// infer 描述字符串时，第一个指向第一个字母，第二个指向剩余字母；对剩余字符串递归可以将其逐一拆解为单个字符并用 | 连接，获得联合类型
type StrToUnion<S> = S extends `${infer F}${infer R}`
  ? F | StrToUnion<R>
  : never

type MyAllCombinations<T extends string, U extends string = StrToUnion<T>> = 
    [U] extends [never] 
    ? '' 
    : '' |  { [K in U]: `${K}${MyAllCombinations<never, Exclude<U, K>>}` }[U]
   

/**
 * 没思路，参考答案
 */