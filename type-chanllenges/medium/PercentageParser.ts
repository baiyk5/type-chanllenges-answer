/**
 * For example:
 */

type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = MyPercentageParser<PString1> // expected ['', '', '']
type R2 = MyPercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = MyPercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = MyPercentageParser<PString4> // expected ["", "85", "%"]
type R5 = MyPercentageParser<PString5> // expected ["", "85", ""]
  
  /**
   * 实现代码
   */
  
  type MyPercentageParser<A extends string> = 
    A extends `${infer P extends '+' | '-'}${infer K}%` ? [P, K, '%'] 
    : A extends `${infer P extends '+' | '-'}${infer K}` ? [P, K, '']
    : A extends `${infer K}%` ? ['', K, '%']
    : A extends `${infer K}` ? ['', K, '']
    : A extends `%` ? ['', '', '%']
    : A extends `` ? ['', '', ''] : never
  
  
  /**
   * 用正则表达式检查类型合规性大概算是TypeScript用户最想要的功能之一了
   * 目前使用字面量的规则来实现不同场景情况输出
   */
  
  