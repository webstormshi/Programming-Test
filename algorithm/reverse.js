function indexCount(str) {
	var arr = str.split(',')
    var sum = Number(arr.pop())
    var indexSum = 0
    var len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if(Number(arr[i]) + Number(arr[j])===sum) {
                indexSum += i + j
            }
        }
    }
    return indexSum
}

var str = read_line()
console.log(indexCount(str))