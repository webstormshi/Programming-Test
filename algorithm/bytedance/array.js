var list = [
    [1,2,1],
    [1,1,0],
    [0,1,1]
]

function  changeRole(list) {
    var count = 0, finish = false;
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if(list[i][j] === 3) list[i][j] = 2
            if(list[i][j] !== 2) continue; 
            count++;
            // 前面
            if(j - 1 >= 0 && list[i][j-1] == 1) {
                list[i][j-1] == 3
                finish = false
                continue
            }
            // 后面
            if(j + 1 < list[i].length && list[i][j+1] == 1) {
                list[i][j-1] == 3
                finish = false
                continue
            }
            // 上面
            if(i - 1 >= 0 && list[i-1][j] == 1) {
                list[i-1][j] = 3
                finish = false
                continue
            }
            // 下面
            if(i + 1 < list.length && list[i+1][j] == 1) {
                list[i+1][j] = 3
                finish = false
                continue
            }
            finish = true
        }
    }
    return count == 0 ? -1 : count
}

var res = changeRole(list);
console.log(res, list);

