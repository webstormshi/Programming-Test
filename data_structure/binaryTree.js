/**
 * 顺序二叉树的基本数据结构和算法
 */
function BinaryTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    /**
     * 二叉排序树的插入
     */

    this.insert = function(key) {
        var newNode = new Node(key)
        if(root === null) {
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }

    var insertNode = function(node, newNode) {
        if(newNode.key < node.key) {
            if(newNode.left === null) {
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }
    }
    /**
     * 二叉排序树的中序遍历：排序
     */

    this.inOrderTarvase = function(callback) {
        inOrderTarvseNode(root, callback)
    }

    var inOrderTarvseNode = function(node, callback) {
        if(node !== null) {
            inOrderTarvseNode(node.left, callback)
            callback(node.key)
            inOrderTarvseNode(node.right, callback)
        }
    }

    /**
     * 排序二叉树的谦虚前序遍历： 快速复制一颗排序二叉树
     */
    this.preOrderTarvse = function(callback) {
        preOrderTarvseNode(root, callback)
    }

    var preOrderTarvseNode = function(node, callback) {
        if(node !== null) {
            callback(node.key)
            preOrderTarvseNode(node.left, callback)
            preOrderTarvseNode(node.right, callback)
        }
    }

    /**
     * 排序二叉树的后序遍历： 操作系统的文件系统
     */
    this.postOrderTarvse = function(callback) {
        postOrderTarvseNode(root, callback)
    }

    var postOrderTarvseNode = function(node, callback) {
        if(node !== null) {
            postOrderTarvseNode(node.left, callback)
            postOrderTarvseNode(node.right, callback)
            callback(node.key)
        }
    } 

    /**
     * 排序二叉树最大值查找
     */
    this.min = function(callback) {
        minNode(root, callback)
    }

    var minNode = function(node, callback) {
        if(node && node.left) {
            minNode(node.left, callback)
        }else{
            callback(node.key)
        }
    }

    /**
     * 排序二叉树最大值查找
     */
    this.max = function(callback){
        maxNode(root, callback)
    }
    var maxNode = function(node, callback) {
        if(node && node.right) {
            maxNode(node.right, callback)
        }else{
            callback(node.key)
        }
    }

    /**
     * 顺序二叉树查找特定的树值
     */
    this.search = function(key) {
        return searchNode(root, key)
    }

    var searchNode = function(node, key) {
        if(node === null) {
            return false
        }
        if(node.key > key) {
            return searchNode(node.left, key)
        }else if(node.key < key) {
            return searchNode(node.right, key)
        }else{
            return true
        }
    }
}

var list = [3, 4, 7, 3, 8, 9]

var binaryTree = new BinaryTree()
list.forEach(function(key){
    binaryTree.insert(key)
})

// binaryTree.inOrderTarvase(function(key){
//     console.log(key)
// })

// binaryTree.preOrderTarvse(function(key){
//     console.log(key)
// })

// binaryTree.postOrderTarvse(function(key){
//     console.log(key)
// })

binaryTree.min(function(key){
    console.log(key)
})

binaryTree.max(function(key){
    console.log(key)
})

console.log('7 is in binaryTree', binaryTree.search(7))
console.log('11 is in binaryTree', binaryTree.search(11))