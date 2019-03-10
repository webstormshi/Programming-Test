/** 
 * promise的语法格式
*/

// promise是一个代理对象，它和原先要进行的操作并无关系
// 它通过引入一个回调，避免更多的回调

// promise的状态
// pending  待定  初始状态
// fulfilled  实现 操作实现
// reject   被否决  操作失败

// promise 状态发生改变，会触发.then()里面的响应函数处理后续步骤
// promise的状态一经改变，不会再改变



// new Promise(
//     // 执行器 executor
//     function(resolve, reject) {
//         // 一段耗时很长的异步操作

//         resolve();      //  数据处理完成

//         reject();       // 数据处理出错
//     }
// )
//     .then(function A() {
//         // 成功，下一步
//     }, function B() {
//         // 失败， 做相应处理
//     });


// 示例1
// console.log('here we go');
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         // resolve('hello');
//         // reject('hahahah');
//         // throw new Error('this a error');
//     }, 2000);
// })
//     .then(function(val){
//         console.log('wolrd ' + val);
//     }, function(err) {
//         console.log('this a error ' + err);
//     }).catch(function(error) {
//         console.log('error throw ' + error);
//     })


// // 示例2
// console.log('here we go');
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);
// })
// .then(result => {
//     console.log('Promise1 ' + result);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('promise2 resolve');
//         }, 2000);
//     })
// }).then(res => {
//     console.log('Promise2 ' + res);
// })

// console.log('-----------------------');

// // 示例3
// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('promise finished');
//     }, 1000);
// })

// setTimeout(() => {
//     promise.then(res => {
//         console.log('res ', res);
//     })
// }, 3000);

// 示例四
// console.log('here we go');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);
// })
//     .then(value => {
//         console.log(value);
//         console.log('everyone');
//         (function() {
//             return new Promise(resolve => {
//                 setTimeout(() => {
//                     console.log('Mr. Launence');
//                 }, 2000);
//             })
//         }());
//         // return false
//     })
//         .then(value => {
//             console.log('vaue ' + value);
//         })

// 示例5
// console.log('start');
// new Promise(resolve => {
//     console.log('Step 1');
//     setTimeout(() => {
//         resolve(100);
//     }, 1000);
// })
//     .then(value => {
//         return new Promise(resolve => {
//             console.log('Step 1 -1 ' + value);
//             setTimeout(() => {
//                 resolve(110);
//             }, 1000);
//         })
//     })
//     .then(value => {
//         console.log('Step 1-2');
//         return value
//     })
//     .then( value => {
//         console.log('Step 1-3');
//         return value
//     })
//     .then(value => {
//         console.log('value ' + value);
//         console.log('Step 2');
//     })



// we have a problem with promises

// doSomething().then(function() {
//     return doSomethingElse();
// });

// doSomething().then(function() {
//     doSomethingElse();
// });

// doSomething().then(doSomethingElse())

// doSomething().then(doSomethingElse);


// 示例8
// console.log('start');
// new Promise(resolve => {
//     setTimeout(() => {
//         // resolve('finish');
//         throw new Error('bye');
//     }, 1000);
// }).then(res => {
//     console.log('resolve ' + res);
// }).catch(error => {
//     console.log('error', error);
// })    // catch可以捕获then中的跑出的错误



new Promise(resolve => {
    console.log('start');
    // resolve('finish');
    throw new Error('bye');
}).catch(error => {
    console.log('error', error);
    throw new Error('bye');
}).then(res => {
    console.log('resolve1 ' + res);
}).then(res => {
    console.log('resolve2 ' + res);
}).catch(error => {
    console.log('error2', error);
})


/** 
 * promise封装请求
*/

const fs = require('fs')

module.exports = {
    readDir: function(path, options) {
        return new Promise(resolve => {
            fs.readdir(path, options, (err, files) => {
                if(err) {
                    throw err
                }
                resolve(files)
            })
        })
    },
    readFile: function(path, options) {
        return new Promise(resolve => {
            fs.readFile(path, options, (err, content) => {
                if(err) {
                    throw err
                }
                resolve(content)
            })
        })
    }
}

const fs = require('fs')

fs.readFile('../README.md', 'utf-8')
    .then(content => {
        console.log('content', content);
    })


