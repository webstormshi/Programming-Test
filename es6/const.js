// {
//     // console.log(typeof a) 
//     let a = 10;
//     console.log(typeof b) 
//     var b = 1;
// }

// var a = 1 / 0
// var b = 2 / 0
// var c = Number('c' + 9)
// var d = null
// var e = undefined
// console.log(a, b, c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(a === b)
// console.log(typeof a)


// function bar(x = y, y = 2) {
//     return [x, y]
// }

// function bar1(x = 2, y = x) {
//     return [x, y]
// }

// console.log(bar1())

// console.log(bar())

// var x = x

// let y = y

// function func() {
//     let a = 10
//     let b = 1
// }

// function func1() {
//     let b = 2
//     let c = 2
// }

// func()
// func1()

// var a = 3

// if(true){
//     a = 1
// }

// console.log(a)

// var tmp = new Date()
// function f() {
//     console.log(tmp)
//     if(false){
//         console.log(tmp)
//         var tmp = 'hello world'
//     }
// }
// f()

// var a = 2

// function bar() {
//     console.log(a)
// }

// bar()

// var s = 'hello'

// for (let i = 0; i < s.length; i++) {
//     console.log(s[i])
// }
// console.log(i)

// function f1() {
//     var n = 5;
//     if(true){
//         console.log('进来了')
//         var n = 10
//     }
//     console.log(n)
// }

// f1()

// var a = 1
// var b = 'this id'
// var c = true
// var d = []
// var e = {}
// var f = NaN
// var g = undefined
// var h = null
// console.log(a instanceof Number)
// console.log(b instanceof String)
// console.log(c instanceof Boolean)
// console.log(d instanceof Array)
// console.log(e instanceof Object)
// console.log(NaN instanceof Number)
// console.log(undefined instanceof Object)
// console.log(null instanceof Object)
// var func = function(){}
// console.log(func instanceof Function)
// console.log(func instanceof Object)
// console.log(Object instanceof Object)
// console.log(Function instanceof Function)
// console.log(Function instanceof Object)

// var func = function(){}
// console.log(String instanceof String)
// console.log(Number instanceof Number)
// console.log(func instanceof func)

var Fun = function(){}
var Func = function(){}
var fun = new Fun()
var func = new Func()
Fun.prototype = Func.prototype
console.log(fun instanceof Fun)
console.log(fun instanceof Func)
console.log(func instanceof Fun)
