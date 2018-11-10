/**
 * 2019滴滴校招笔试题：链式调用
 */

var Sub = function(num) {
	this.num = num || 0
    this.add = function(num){
    	this.num += num
        return this
    }
    this.getResult = function(num) {
        return this.num
    }
}

var num = new Sub(0).add(100).add(50).add(-30).getResult();
console.log(num)

var s = 'new Sub(0).add(100).add(50).add(-30).getResult()'
console.log(eval(s))