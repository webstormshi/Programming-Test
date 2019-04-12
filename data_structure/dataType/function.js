// var obj = {
//     a: 1,
//     b: function() {
//         console.log('this', this);
//         console.log(this.a);
//     }
// }
// var fun = obj.b;
// fun();

function a(a) {
    a ^= (1<<4)-1;
    return a;
}

console.log(a(10));

console.log(1);

// defer   异步加载推迟执行

async

/** 
 * eval 函数的使用
*/

eval("var a= 1; console.log(1234)");
// 安全问题
// requireJS  =>  AMD模块化规范的代表
// commonJS => seaJS
// commonJS => nodeJS
// ES6 的模块化

define(['jquery', "moduleA", "moduleB"], function($, a, b) {

});
// 严格模式下eval会产生自己的作用域

function test() {
    eval("var b = 20");

    console.log(b);
}

test();


setTimeout( "alert(12345)" ,100);
