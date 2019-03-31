var arr = [1,2,3,4];

arr.shift();        // head删除一个元素 
arr.push(1);        // end添加一个元素
arr.unshift(2);     // 头部天乩一个元素
arr.slice(firstIndex, endIndex);    // 返回切割下的数组，不改变原数组
arr.splice(index, length, addItem1, addItem2, addItem1, ...);
var items = arr.concat([1,3]);      // 两个数组拼接成一个数组

var newList = arr1.concat(arr2); // 合并两个数组
var same = list.every(item => item.value === 1);  // 判断数据是否全部匹配
var exist = list.every(item => item.value === 2);   // 任意元素返回true，就返回true

var result = list.filter(item => item.name === 'shi');
list.forEach(item => {
    console.log('item', item);
});         // forEach 直接处理每一项，不返回结果
list.map(item => [].concat(item))   // map返回每一项的处理结果数组
list.join(',');
var firstIndex = list.indexOf('2');
var lastIndex = list.lastIndexoOf('1');

list.reverse();  // 直接改变list原数组的顺序
list.sort((a, b)=> a - b);  // 将数组进行排序，a-b从小到大， b-a从大到小
var res = ['Ana', 'John', 'ana', 'Zero'].sort();
console.log('res', res);

var keys = Object.keys(list);   // 获取所有的key值
var values = Object.values(list);   // 获取所有的value值

console.log(...[1,2,3,4,5]);    // spread——展开运算符

[1,3,5,6,8,56,43,5,7,8].reduce((previous, current, index) => {  // 求和适用函数
    console.log('previous, current, index', previous, current, index);
    return previous + current;
});

