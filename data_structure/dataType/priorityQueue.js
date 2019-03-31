/** 
 * 优先队列
*/

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
        var list = [];

        this.push = function(item) {
            list.push(item);
        };
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        
        if(this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (let i = 0; i < items.length; i++) {
                if(queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added) {
                items.push(queueElement);
            }
        }
    }

    this.isEmpty = function() {
        return items.length === 0;
    }
}