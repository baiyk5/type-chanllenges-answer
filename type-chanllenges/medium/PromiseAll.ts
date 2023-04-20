/**
 * For example:
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = MyPromiseAll([promise1, promise2, promise3] as const)


/**
 * 实现代码
 */
declare function MyPromiseAll(values: any): any

/**
 * 没太理解。。
 */