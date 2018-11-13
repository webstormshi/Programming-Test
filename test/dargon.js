var N = 3;
var M = 5
var list = [[1,0], [2,3], [3,2], [4,2], [5, 2]]
var isLive = true
while(isLive) {
    var compare = []
    for (let i = 0; i < list.length; i++) {
        var item = list[i]
        if(item[0] < M) {
            item[2] = item[1] - item[0]
            compare.push(item)
        }
    }
    for (let i = 0; i < compare.length; i++) {
        for (let j = 0; j < compare.length; j++) {
            if(compare[j] > compare[j+1]) {
                var temp = compare[j+1]
                compare[j][2] = compare[j+1][2]
                compare[j+1][2] = temp
                isLive = false
            }
        }
    }
    console.log(compare)
}

console.log(compare)