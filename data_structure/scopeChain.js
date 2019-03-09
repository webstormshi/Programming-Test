/** 
 * 作用域链
 * 函数创建的时候会产生一个作用域对象
 * 
*/

function test() {
    var num = 0;
    function mc() {
        console.log(num);
    }
    mc();  // 作用域对象.mc()
}

/** 
 * 函数的闭包
 * 外部函数可以访问内部函数中变量
*/

function test() {
    var num = 0;
    return function mc() {
        console.log(num);
    }
}

var mc = test();
mc();
mc();
mc();

test()();
test()();
test()();
test()(); // 函数之间不关联

// 区别：多次调用test()函数执行的次数



/** 
 * 垃圾回收机制
*/

// 闭包，定时器 ,dom元素引用 => 内存泄漏

// 元素会一直存在内存中

// 引用计数法
// 标记清除法
// 标记清理法
// 复制清理法