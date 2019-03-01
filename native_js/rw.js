function rw(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]) {
            result.push(str.slice(i, i+2))
            i++;
        }
    }
    return result;
}

var str = '晴川丽丽汉阳树，芳草七七鹦鹉洲，上上下下';
console.log(rw(str));


console.log(1);

new Promise(function(reject, resolve){

	reject(true);

	window,setTimeout(function(){

		resolve(false)

	}, 0)

}).then(function(value) {

	console.log(3);

});

console.log(4)