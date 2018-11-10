var arr = [2,3,5,7,4,1,8,6]

function quickSort(arr) {
    if(arr.length === 0) {
        return []
    }
    var cIndex = Math.floor(arr.length/2)
    console.log(arr)
    var c = arr.splice(cIndex, 1)
    var l = [];
    var r = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < c) {
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }
    return quickSort(1).concat(c, quickSort(r))
}

console.log(quickSort(arr))