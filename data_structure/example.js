// // 原始写法
// function sumOnlyNumbers() {
//     var args = arguments;
//     var numbers = filterNumbers();
//     return numbers.reduce((sum, element) => sum + element);

//     function filterNumbers() {
//         return Array.prototype.filter.call(args, element => typeof element === 'number')
//     }
// }

// // rest 参数写法
// function sumOnlyNumbers(...args) {
//     // var args = arguments;
//     var numbers = filterNumbers();
//     return numbers.reduce((sum, element) => sum + element);

//     function filterNumbers() {
//         return args.filter(element => typeof element === 'number')
//     }
// }

// sumOnlyNumbers(1, "Hello", 5, false);

var isEven = function(x) {
    // console.log(x);
    return (x % 2 === 0) ? true : false;
}

var list = [1,3,5,6,8,56,43,5,7,8];
list.reduce((previous, current, index) => {
    // console.log('previous, current, index', previous, current, index);
    return previous + current;
});

// list.every(isEven);
// list.map(isEven);

var res = ['Ana', 'John', 'ana', 'Zero'].sort();
var res2 = ['A', 'd', 'E', 'a', 'e', 'y', 'q'].sort();
var res3 = ['江西', '北京', '河北', '天津'];
console.log('res', res);
console.log('res2', res2);
console.log('res3', res3);