// For example:

type StringToNumber = { 
    mapFrom: string; 
    mapTo: number;
}
type a = MyMapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }

// 实现代码


type Transform<R extends { mapFrom: any; mapTo: any }, T> =
    T extends R['mapFrom']
    ? R['mapTo']
    : never

type MyMapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
    [K in keyof T]: [T[K]] extends [R['mapFrom']] ? Transform<R, T[K]> : T[K]
}
/** 
 * 没有思路。。。
 * 参考答案思路：因为要返回一个新对象，所以使用 { [K in keyof T]: ... } 的形式描述结果对象。
 * 然后就要对 Value类型进行判断，为了防止 never 的作用，我们包一层数组进行判断：
 */