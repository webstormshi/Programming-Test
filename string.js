// 最长字符串
var p = 'pwwkew'
// var p = 'abcabcbbb'
var indexArr = []
var preIndex = 0
for (let i = 1; i < p.length; i++) {
    var char = p.slice(i, i+1)
    var str = p.slice(0, i)
    if(str.indexOf(char)>-1) {
        // console.log('str', str, str.length)
        indexArr.push(str.length)
    }
}

var maxLen = indexArr[0]
var maxStartIndex = 0
for (let i = 1; i < indexArr.length; i++) {
    var currentLen = indexArr[i] - indexArr[i-1]
    if(currentLen > maxLen) {
        currentLen = maxLen
        maxStartIndex = indexArr[i]
    }
}

var maxStr = p.slice(maxStartIndex, maxLen)

console.log('maxLen', maxLen)

console.log('maxStr', maxStr)
