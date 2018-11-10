var arr = []
for (let i = 0; i < 3; i++) {
    arr.push(i)
}

for (let i = 0; i < arr.length; i++) {
    arr.shift()
    console.log(arr)
}