/**
 * For example:
 */

const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fn> // should be "1 | 2"
/**
 * 实现代码
 */

type MyReturnType<T> = T extends (...args: any[]) => infer K ? K : never

/**
 * infer推导出传入参数的类型  输出联合类型
 */