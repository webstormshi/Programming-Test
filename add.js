var arr = ['qe', '1', null, 3, 4, 5, 8]
var sum = 0
for (let i = 0; i < arr.length; i++) {
    var element = arr[i]
    console.log('isNaN(Number(element)', isNaN(Number(element)))
    if(isNaN(Number(element)) || !element) continue
    if(typeof element === 'string')  element = Number(element)
    sum += element
}
console.log('sum', sum)