/** 
 * promise.all([]).then()
*/

Promise.all();

Promise.all与map()  // 连用

Promise.resolve()
Promise.reject()

Promise.race()  // 多个请求只要有一个返回结果就resolve

const fs = require('fs')
const path = require('path')
const FileSystem = require('./FileSystem');

function findLargest(dir) {
    return FileSystem.readDir(dir, 'utf-8')
        .then(files => {
            return Promise.all(files,map(file => {
                return new Promise(resolve => {
                    fs.stat(path.join(dir, file), (err, stat) => {
                        if(err) throw err;
                        if(stat.isDirectory()) {
                            return resolve({
                                size: 0
                            });
                        }
                        stat.file = file;
                        resolve(stat);
                    })
                })
            }))
        })
        .then(stats => {
            let biggest = stats.reduce((memo, stats) => {
                if(memo.size < stat.size) {
                    return stats
                }
                return memo;
            })
            return biggest.file;
        })
}

