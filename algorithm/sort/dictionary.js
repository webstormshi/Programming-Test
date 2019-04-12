var list = ['apple', 'gray', 'grayed', 'red', 'banana'];

function compare(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i+1; j < list.length; j++) {
            if(list[i] === list[j]) break;
            if(compareStr(list[i], list[j])<0){
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp
            }
        }
    }
    return list;
}

function compareStr(strA, strB) {
    for (let i = 0; i < min(strA, strB); i++) {
        if(strA[i] < strB[i]) return 1;
        if(strA[i] > strB[i]) return -1;
    }
    return -1;
}

function min(a, b) {
    return a.length > b.length ? b.length : a.length;
}

var res = compare(list);
console.log(res);
