var str = '1000 10 39 33 333 39'
var list = str.split(' ')
list.forEach(function(val){
    return Number(val)
})

while(list[0]>0&&list[3]>0){
    var timer1 = setTimeout(function(){
        list[0] -= list[4]
    }, list[2])
    var timer2 = setTimeout(function(){
        list[3] -= list[1]
    }, list[5])
}