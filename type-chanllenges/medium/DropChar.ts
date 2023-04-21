/**
 * For example:
 */

type Butterfly = MyDropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  
  /**
   * 实现代码
   */
  
  type MyDropChar<T extends string, P extends string> = 
    T extends `${infer M}${P}${infer N}` 
    ? `${M}${MyDropChar<N,P>}`
    : T 
  
  /**
   * 知识点：
   * 递归处理字符串T，使用infer 推导字面量类型。
   */
  
  