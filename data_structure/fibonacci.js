/** 
 * 斐波那契数列
*/

function fibonnacci(n) {
    if(n === 1 || n === 2) return 1;
    return fibonnacci(n-1) + fibonnacci(n-2);
}

var result = fibonnacci(6);
console.log('result', result);