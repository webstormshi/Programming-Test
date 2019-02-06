// getName();
// var getName = function() {
//     console.log(123);
// }

// function getName() {
//     console.log(234);
// }

// getName();

var value = 'hello';
function show() {
    console.log(value);
    if(!value) {
        value = 'fucntion';
    }
    console.log(value);
}
// show();

var a = 1234;
function a() {};

console.log(typeof a);