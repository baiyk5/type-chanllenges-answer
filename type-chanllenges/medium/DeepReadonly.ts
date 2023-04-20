/**
 * For example:
 */

type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
}
  
type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
}

type Todo = MyDeepReadonly<X> // should be same as `Expected`

/**
 * 实现代码
 */

type MyDeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends never ? T[P] : MyDeepReadonly<T[P]>;
};

/**
 * keyof T[P] extends never 来判断是否有子集 ，存在子集的话递归
 * 还算好理解
 * tips: 通过 keyof T[P] extends never 这种方式判断是否有子属性，可以完成深度遍历
 */