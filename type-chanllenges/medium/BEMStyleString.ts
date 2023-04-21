// For example:

type a = MyBEM<'btn', ['price'], []> // btn__price
type b = MyBEM<'btn', ['price'], ['warning', 'success']> // 'btn__price--warning' | 'btn__price--success'
type c = MyBEM<'btn', [], ['small', 'medium', 'large']> // 'btn--small' | 'btn--medium' | 'btn--large'

// 实现代码

type IsNever<TValue> = TValue[] extends never[] ? true : false;
type SafeUnion<TUnion> = IsNever<TUnion> extends true ? "" : TUnion; // 空值判断

type MyBEM<B extends string, E extends string[], M extends string[]> = `${B}${SafeUnion<`__${E[number]}`>}${SafeUnion<`--${M[number]}`>}`

/**
 * 没思路
 * 最好理解的思路直接使用字符模板通过下标将数组或对象转成联合类型`${B}__${E[number]}--${M[number]}`
 * 另外增加空值判断（太牛了）
 */