// var foo = 1

// function baidu() {
//     console.log(foo)
//     var foo = 2
//     console.log(foo)
// }

// baidu()


// var baidu = {
//     count: 2,
//     getBaiduCount: function() {
//         return this.count
//     }
// }
// console.log(baidu.getBaiduCount())
// var func = baidu.getBaiduCount
// console.log(func())

// var n= (2).toString()
// console.log(n, typeof(n))

// console.log(0 === '')
// console.log(0 === '0')
// console.log(null === undefined)
// console.log(false === 'false')
// console.log(false === '0')

// var Foo = function() {
//     var i = 0
//     return function() {
//         console.log(i++)
//     }
// }

// var f1 = Foo()
// var f2 = Foo()
// f1()
// f1()
// f2()

// var func = function(m, n) {
//    arguments[0] = 3
//    arguments[1] = 2
//    return m + n
// }

// console.log(func(1, 1))

function add(n) {
    return n + '010'
}

console.log(add(20))