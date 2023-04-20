// For example:
interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type MyDogType = MyLookUp<Cat | Dog, 'dog'> // expected to be `Dog`

// 实现代码

type MyLookUp<T, K extends string> = T extends { type: infer C } ? (C extends K ? T : never) : never


/**
 * 知识点
 * 1、联合类型的判断是一个个来的， infer推导类型 判断是否等于入参K，相等则输出类型 T
 * 2、C extends K 用来判断是否相等
 */