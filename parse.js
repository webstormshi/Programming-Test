
var str = { node: 'root', next: [ { node: 'second_root' }, { node: 'second_child', next: [{ node: 'second_child_1', next: { node: 'second_child_1_1' } }, { node: 'second_child_2' }] }, { node: 'third_root', next: { node: 'third_child' , next: [{ node: 'third_child_1', next: { node: 'third_child_1_1' } }, { node: 'third_child_2' }] } } ] }
// var str = { '1': 'qwergh', 2: 'rty7654', 3: 'ert765rd'}
var json = JSON.parse(JSON.stringify(str))
function parseArray(json) {
    var array = []
    for (const key in json) {
        var type = Object.prototype.toString.call(json[key])
        var item = json[key]
        if(type === '[object Array]') {
            var item = parseArray(item)
        }
        array.push(item)
    }
    return array
}

function parseMutli(list) {
    var type = Object.prototype.toString.call(json[key])
    if(type === '[object Array]') {
        var arr = []
        for (let i = 0; i < list.length; i++) {
            var l
        }
    }
}

console.log(parseArray(json))