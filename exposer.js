var Exposer = (function(){
    var privateVariable = 0

    var privateMethod = function(){
        privateVariable++
        console.log('privateVariable is added')
    }

    var privateToExpose = function(){
        console.log('privateVariable to expose')
        return this.privateVariable
    }

    var otherMethodToExpose = function(){
        privateMethod()
    }

    return {
        first: privateToExpose,
        second: otherMethodToExpose
    }
})()

console.log(Exposer.privateVariable)
console.log(Exposer.first())
console.log(Exposer.second())
console.log(Exposer.func())