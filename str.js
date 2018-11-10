var str = 'sdfghgvc'
var charStr = '/'
var index = 3
str = str.slice(0,index) + charStr + str.slice(index+1, str.length)
console.log(str)