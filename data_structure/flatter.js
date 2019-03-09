/** 
 * 函数的柯里化
 * 说明：函数的多参数变成单参数
*/

fn(2,3,4);
fn(2)(3)(4) == 24

function fn(a, b, c) {
    return a*b*c
}

function fn(a) {
    return function(b){
        return function(c) {
            return a*b*c
        }
    }
}

