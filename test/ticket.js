var n = '94476413'
var k = 7
var sum = 0
var aveage = 0

for (let i = 0; i < n.length; i++) {
    sum += Number(n[i])
}

aveage = sum / n.length

var result1 = 0
var result2 = 0
var list1 = []
var list2 = []
for (let i = 0; i < n.length; i++) {
    list1.push(Math.abs(Math.floor(aveage) - Number(n[i])))
    list2.push(Math.abs(Math.ceil(aveage) - Number(n[i])))
}
console.log(list1, list2)

list1.sort(function(a, b) {
    return a - b
})
list2.sort(function(a, b) {
    return a - b
})
console.log(list1, list2)

for (let i = 0; i < k; i++) {
    result1 += list1[i]
    result2 += list2[i] 
}

var res = result1 > result2 ? result2 : result1

console.log(res)
