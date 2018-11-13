var str = '1 2 3'
var edages = str.split(' ')
edages.sort(function(a, b){
    return a - b
})
console.log(edages)
var con1 = Number(edages[0])+Number(edages[1])>Number(edages[2])
var con2 = Number(edages[2])-Number(edages[0])<Number(edages[1])
console.log(con1, con2)
while(!(con1&&con2)) {
    edages[2]--
    console.log(123456)
}

var sum = 0

for(var i=0; i < edages.length; i++){
    sum += Number(edages[i])
}
console.log(sum)