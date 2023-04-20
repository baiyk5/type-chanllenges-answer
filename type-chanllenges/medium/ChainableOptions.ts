/**
 * For example:
 */

declare const config: MyChainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
/**
 * 实现代码
 */

type MyChainable<Result = {}> = {
    option<K extends string, V>(key: K, value: V): MyChainable<Result & {
        [P in K]: V
    }>,
    /**
     *  改进 , 用 omit去改良result， 排除已经使用过的key
     *  option<K extends string, V>(key: K, value: V): MyChainable<Omit<Result, K> & {
            [P in K]: V
        }>
     */
    get: () => Result
}