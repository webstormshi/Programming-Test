var list = [1,2,3,4,4,3,2,1,2,1,2]
var set = new Set(list)
console.log(set)
var arr = new Array(...set)
console.log(arr)
for (const item of set) {
    console.log(item)
}