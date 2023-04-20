
/**
 * For example:
 */

type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
/**
 * 实现代码
 */

type MyIncludes<T extends any[], P> = T extends [infer First, ...infer Rest] ? Equal<First, P> extends true ? true : MyIncludes<Rest, P> : false

/**
 * Equals<X, Y> 判断X Y是否相等 type-chanllenges 大神封装的工具类
 */