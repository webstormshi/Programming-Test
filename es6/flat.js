/** 
 * 多维数组降维成一维数组
*/

// var arr = [1,2,3,4,[2,4,5],6,7,8,9];
var arr = [1,2,3,4,[2,[2,3,4,0],4,5],6,7,8,9];
function flat(arr) {
    var list = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'object') {
            flat(arr[i])
        } else {
            list.push(arr[i])
        }
    }
    return list
}

console.log(flat(arr))