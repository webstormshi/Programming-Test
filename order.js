var num = 6;
var arr = [3, 2, 9, 10, 4, 5]
for(var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length-1; j++) {
        if(arr[j]>arr[j+1]) {
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

var mid = 0;
if((num/2)%1 !== 0) {
    var index = Math.ceil(num/2);
    mid = arr[index]
}else{
    var index = (num/2);
    mid = (arr[index-1] + arr[index]) / 2;
}

console.log('the last mid number is:', mid)