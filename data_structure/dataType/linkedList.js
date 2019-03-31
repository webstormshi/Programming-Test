/** 
 * 数据链表
*/

function LinkedList() {
    var Node = function(element) {
        this.element = element,
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        var node = new Node(element);
        var current;
        if(head === null) { // 如果没有节点的话直接接上去
            head = node;
        } else {    //  如果有节点，通过next查找目标元素
            current = head;
            // 循环查找目标元素
            while(current.next) {
                current = current.next;
            }
            // 插入元素到节点尾部
            current.next = node;
        }
        //  长度自增
        length++;
        console.log('head', head);
    }

    this.remove = function(position) {
        // 边界检测
        if(position > -1 && position < length) {
            var current = head,
            previous,
            index = 0;
            
            // 移除第一项
            if(position === 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            console.log('head', head);
            return current.element;
        } else {
            return null;
        }
    }

    this.insert = function(position, element) {
        if(position > -1 && position <= length) {
            var node = new Node(element);
            var current = head,
                previous,
                index = 0;

            if(position === 0) {
                node.next = head.next;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = previous.next;
                }
                node.next = current.next;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.toString = function() {
        var current = head;
            str = '';
            while(current) {
                str += ',' + current.element;
                current = current.next;
            }
            return str.slice(1)
    }

    thisindexOf = function(key) {
        var current = head;
        var index = 0;
        while(current) {
            if(current.element === key) {
                return index
            }
            index++;
            current = current.next;
        }
        reuturn -1
    }

    this.size = function() {
        return length;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.getHead = function() {
        return head;
    }
}

var nodelink = new LinkedList();
nodelink.append('jiangxi');
nodelink.append('nanchang');
nodelink.append('qingshanhu');
nodelink.remove('qingshanhu');