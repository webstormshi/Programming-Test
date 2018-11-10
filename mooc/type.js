// var a = 2
// var b = '22'
// console.log(a - b)
// console.log(a + b)

// var n = 111
// var m = '111'
// console.log(a === b)
// console.log(a == b)
// console.log(null === null)
// console.log(undefined === undefined)

var str = 'string'
var strObj = new String()
console.log(str)
str.t = 10
console.log(str.t)
console.log(strObj)


// 判断数据的类型方法
typeof  // 可以用于基本数据及function类型的判断，但是当未  null失效
instanceof    //适用于自定义对象，也可检测原生对象，在不同的iframe和window间的检测失效
Object.prototype.toString   //适用于判断内置对象和基本类型，但是在IE6/7/8 null和undefined失效[Object object]
constructor
duck type