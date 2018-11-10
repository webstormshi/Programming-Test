// var arr = ['qe', '1', null, 3, 4, 5, 8]
// var sum = 0
// for (let i = 0; i < arr.length; i++) {
//     var element = arr[i]
//     console.log('isNaN(Number(element)', isNaN(Number(element)))
//     if(isNaN(Number(element)) || !element) continue
//     if(typeof element === 'string')  element = Number(element)
//     sum += element
// }
// console.log('sum', sum)

// function createBase(num) {
//     return function(plus) {
//         console.log(num + plus)
//         return num + plus
//     }
// }

// var addSix = createBase(6)
// addSix(10)  // 16
// addSix(21)  // 27

// var obj1 = {
//     name: '1234',
//     title: 'dfgh',
//     desc: 'csvcfj'
// }

// var obj2 = {
//     name: '1234',
//     title: 'dfgh',
//     desc: 'csvcfj'
// }

const isClass = o => {
    if(o === null) return 'Null'
    if(o === undefined) return 'Undefined'
    return Object.prototype.toString.call(o).slice(8, -1)
}

const deepClone = obj => {
    if(!obj) return null
    let result, oClass = isClass(obj)
    if(oClass === 'Object') {
        result = {}
    }else if(oClass === 'Array') {
        result = []
    }else {
        return obj
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let copy = obj[key]
            if(isClass)
        }
    }
}

// function hashcode(str) {
//     var hash = 0, i, chr, len;
//     if (str.length === 0) return hash;
//     for (i = 0, len = str.length; i < len; i++) {
//         chr   = str.charCodeAt(i);
//         hash  = ((hash << 5) - hash) + chr;
//         hash |= 0; // Convert to 32bit integer
//     }
//     return hash;
// }

// console.log(obj1 === obj2)
// var test1=hashcode(JSON.stringify(obj1));
// var test2=hashcode(JSON.stringify(obj2));
// console.log(test1,test2,test1==test2);


