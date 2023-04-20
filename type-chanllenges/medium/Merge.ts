/**
 * For example:
 */
type foo = {
    name: string;
    age: string;
  }
type coo = {
    age: number;
    sex: string
}
  
type Result = MyMerge<foo,coo>; // expected to be {name: string, age: number, sex: string}


/**
 * 实现代码
 */

type MyMerge<T extends object, K extends object> = {
    [P in keyof T | keyof K]: P extends keyof K ? K[P] : P extends keyof T ? T[P] : never
}

/**
 * 我的思路：
 * 用联合符合并T、K对象的key值，P遍历取值，判断P是否存在K中，存在则取K[P]；
 * 否则则判断是否存在T中，存在则取T[P]，都没有则不取，never
 */