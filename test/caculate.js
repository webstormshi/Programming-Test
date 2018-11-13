var str = '027555+692-0xD32C'

var list = str.split('+')

var sum = 0

for (let i = 0; i < list.length; i++) {
    var items = list[i].split('-')
    // console.log(items)
    sum += caculate(items) 
}

function caculate(arr) {
    var res = parseNum(arr[0])
    if(arr.length==1){
        return res
    }
    for (let i = 1; i < arr.length; i++) {
        console.log(parseNum(arr[i]))
        res -= parseNum(arr[i])
    }
    console.log(res)
    return res
}

function parseNum(num) {
    if(num.split(0,2) == '0x') {
        return Number(num.toString(16))
    }else if(num.split(0,1) == '0') {
        return Number(num.toString(8))
    }else{
        return Number(num)
    }
}
// console.log(list)
// console.log(sum)