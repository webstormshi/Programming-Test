function Person(name) {
    this.name = name
}
// this指代当前对象，所谓当前对象，是指，此刻正在执行这个函数的对象
// 谁调用这个函数，this就指向谁

let p = new Person()

let obj = {
    print: Person
}


// call/aplly
// 函数.call(指定任何对象)
// 函数.apply(置顶任何对象，参数)

// let 新函数 = 函数.bind(指定对象)
// 新函数会永久指向指定对象

Function .prototype.bind = function(target) {
    var fn = this;
    return function() {
        fn.apply(this);
    }
}

// var newalter = alter.bind(xxx);


/** 
 * 箭头函数
*/

// 普通函数
let test = () => {

}

// 箭头函数
let test = () => {

}
// 箭头函数和构造函数的区别：箭头函数不能执行new，箭头函数没有this 
let obj = {
    id: 345,
    hello: () => {
        console.log(this);  // window
        console.log(this.id);  // underfined
    }
}

obj.hello();

setTimeout(() => {
    console.log(this);   // 定时器函数指向是window
}, 1000);