// function repeat(x, k) {
//     var str = ''
//     for (let i = 0; i < k; i++) {
//         str += x    
//     }
//     return Number(str)
// }

// var v1 = repeat(1010, 3)

// var v2 = repeat(101010, 2)

// var desc = v1 -v2

// if(desc > 0) {
//     console.log('LESS')
// }else if(desc < 0) {
//     console.log('Greater')
// }else if(desc == 0){
//     console.log('Equal')
// }else{
//     console.log('nukown')
// }

var a = 1
function f() {
    var a = 2
    var e = eval
    e('console.log(a)')
}
