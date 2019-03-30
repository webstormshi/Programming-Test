// var str = read_line();

// var list = str.split(',');

// // okcoin,orange,apple

// var obj = {};
// for (let i = 0; i < str.length; i++) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(str[i])) {
//             obj.key = {
//                 count: obj[key].count++,
                
//             }
//         }
//     }
// }

// var obj = {
//     'o': {
//         count: 2,
//         arr: ['kocoin', 'orange']
//     },
// }

// let a = 20;
// function fn() {
//     console.log(a);
//     let a = 20;
//     console.log(a);
// }
// fn();

var a = 20;
(function(){
    console.log(a);
    a = 5;
    console.log(global.a);
    var a = 10;
    console.log(a);
})();