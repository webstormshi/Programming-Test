/**
 * web前端开发岗
 * 爱奇艺2018校招笔试编程题
 */
var arr = [1,2,2,2,3,4,5,3,2,4]
var list = {}
for (let i = 0; i < arr.length; i++) {
    var key = arr[i]
    if(key in list){
        list[key]++
    }else{
        list[key] = 1
    }
}

var numList = []
for (const key in list) {
    numList.push(list[key])
}

numList.sort(function(a,b){
    return a - b
})

console.log(numList[numList.length-1])