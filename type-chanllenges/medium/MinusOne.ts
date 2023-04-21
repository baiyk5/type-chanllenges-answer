/**
 * For example:
 */

type Zero = MyMinusOne<1> // 0
type FiftyFour = MyMinusOne<55> // 54
  
  /**
   * 实现代码
   */
  
  type MyMinusOne<T extends number, A extends string[] = []> = 
    T extends 0 ? -1 : ['😊', ...A]['length'] extends T 
    ? A['length'] : MyMinusOne<T, ['😊', ...A]>
  /**
   * 完全没有思路。。
   * 因为通过查询并未了解到ts具有计算能力
   * 但参考答案而知可以通过数组长度来做计算，几乎所有数字计算都是通过它推导出来的，为此提供了新思路
   * 但是还是很难解释利用countTo这个api的原理。。
   */
  
  