var n = 4;
var m = 10;

var type = [1,5,2,1,1,1,2,5,7,2]
var set = new Set(type)
var arr = []

for (let item of set) {
    var count = 0
    for (let j = 0; j < type.length; j++) {
        if(type[j] === item) count++
    }
    arr.push(count)
}


function getDay(list) {
    list.sort(function(a, b){
        return a - b
    })
    // console.log('list', list)
    var min = list[0]
    var max = list[list.length-1]
    if((max/2) - min >= 1){
        list.pop()
        list.shift()
        if(max%2 == 0) {
            list.push(max/2, max/2)
        }else{
            list.push((max-1)/2, (max+1)/2)
        }
    }else{
        // console.log(list, min)
        return min
    }
    getDay(list)
}

console.log(getDay(arr))
