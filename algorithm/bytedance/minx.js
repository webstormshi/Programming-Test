var list = [1,2,3,4,5,6]

function compareMin(list) {
    var start = list[0] + 1;
    var result = start;
    for(var i = 0; i < list.length; i++) {
        if(start < list[i]) {
            result = start - (list[i] - start)
        } else {
            result = start + (start - list[i])
        }
        if(result < 0) {
            start++;
            continue;
        } else {
            return start;
        }
    }
}

var res = compareMin(list);
console.log(res);