var n = parseInt(readline());
function getResult(params) {
	var temp = params
	var arr = new Array()
	var b
    while (temp != 0) {
        b = params % 2
        temp = parseInt(params / 2)
        params = temp
        arr.push(b)
    }
    arr = arr.reverse().toString().replace(/,/g,'')
    return arr
}

var result = getResult(Number(n));

print(String(result.split('1').length -1));