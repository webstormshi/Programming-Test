/**
 * 2019滴滴校招笔试题：求合并车牌的最小费用
 */

var str = '1 7 2 1 7 1'
var k = 2
var list = str.split(' ')
for (let i = 0; i < list.length; i++) {
    list[i] = Number(list[i])
}
console.log(list)
while(k) {
    var len = list.length
    var index = 0
    var min = list[index]
    for (let i = 1; i < len; i++) {
        if(min > list[i]) {
            index = i
            min = list[i]
        }
    }
    if(index==0||list[index-1]>list[index+1]){
        list[index+1] += min
    }else{
        list[index-1] += min
    }
    list.splice(index, 1)
    k--
}

list.sort(function(a, b) {
    return a - b
})

console.log(list[0])