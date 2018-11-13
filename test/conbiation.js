/**
 * web前端开发岗
 * 爱奇艺2018校招笔试编程题
 */
var n = 5

var left = Math.floor(n/2)
var right = n - left

var sum = n + 1 + sumPart(left) + sumPart(right)

console.log(sum)

function sumPart(part) {
    var sum = 1
    if(part < 2) return 0
    for (let i = 2; i < part; i++) {
        sum += conbation(part, i)
    }
    return sum
}

function conbation(m,n) {
   return  factorial(m,n)/factorial(n,n)
}

function factorial(m,n){        
    var num = 1;        
    var count = 0;        
    for(var i = m;i > 0;i--){            
        if(count == n)  break;         
        num = num * i;            
        count++;        
    }        
    return num;    
}