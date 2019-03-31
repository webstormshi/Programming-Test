var Queue = function() {
    var items = [];

    this.enqueue = function(element) {  //  队尾添加元素
        items.push(element);
    }

    this.dequeue = function() {     // 队首删除元素
        return items.shift();
    }

    this.front = function() {   //  队首元素
        return items[0];
    }

    this.isEmpty = function() {     // 是否为空
        return items.length === 0;
    }

    this.size = function() {      // 队列长度
        return items.length;
    }

    this.clear = function() {
        items = [];
    }

    this.print = function() {   //  打印队列
        console.log(items.toString());
    }
}

var queue = new Queue();

queue.enqueue('123456');
queue.enqueue('2345');
queue.enqueue('2345234');
queue.dequeue();
console.log(queue.size());
console.log('isEmpty', queue.isEmpty());
queue.clear();
queue.print();