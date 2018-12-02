
/** 
 * 事件队列
*/
setTimeout(() => {
    console.log(1)
}, 0)

new Promise((resolve, reject) => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(4)
})

process.nextTick(() => {
    console.log(5)
})

console.log(6)