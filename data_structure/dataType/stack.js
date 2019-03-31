/** 
 * 栈结构
*/

function Stack() {
    var items = [];

    this.size = function() {    // 获取栈的元素大小
        return items.length;
    }

    this.push = function(...element) { // 压栈
        items.push(...element);
    }

    this.pop = function() {     // 弹栈
        return items.pop();
    }

    this.peek = function() {    // 获取栈顶元素
        return items[items.length - 1];
    }

    this.isEmpty = function() {     // 栈空判断
        return items.length === 0;
    }

    this.clear = function() {       //  清空栈
        items = [];
    }

    this.print = function() {       // 打印栈元素
        console.log(items.toString());
    }
}

var stack = new Stack();
// console.log('stack', stack.isEmpty());
// stack.push(1,2,3, 45,67);
// stack.print();
// console.log(stack.peek());

function divideBy2(num) {
    var list = new Stack();
    while(data > 1) {
        data = Math.floor(data / 2);
        console.log('data%2', data % 2);
        list.push(data%2);
    }
}

list.push(data);