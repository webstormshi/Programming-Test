var a = 1

foo()

function foo() {
    a = 3
    console.log(a)
    var a
}

console.log(a)