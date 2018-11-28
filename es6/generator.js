"use strict"

// /** 
//  * 函数的运行流程，返回一个Iterator实例，然后再执行Iterator实例的next()方法，
//  * 那么这个函数才真正开始运行，并把yield里的值包装成一个固定对象{ value: '1', done: false },
//  * 知道运行到函数结尾，最后返回{ value: undefined, done: true }
// */
// function* fibonacci() {
//     yield "1"
//     yield "2"
// }

// var it = fibonacci();

// console.log(it)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


// function* gen() {
//     yield 0;
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let g = gen()
// console.log([...g], g.next(), [...g], g.next())


function* foo(x) {
    var y = 2 * (yield ( x + 1 ))
    var z = yield ( y / 3 )
    return x - y + z
}

var a = foo(5)
console.log('a.next()', a.next())
console.log('a.next()', a.next())
console.log('a.next()', a.next())