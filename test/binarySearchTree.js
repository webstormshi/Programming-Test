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
     * 顺序二叉树判断
     */
    this.isBinarySearchTree = function() {
        return searchNode(root)
    }

    var searchNode = function(node) {
        if(node === null) {
            return false
        }
        if(node.left && (!node.right || node.right === 'none')) {
            return false;
        }
        if(node.left.left && node.left.right) {
            searchNode(node.left);
        }
        if(node.right.left && node.right.right) {
            searchNode(node.right);
        }
        if(node.left.key > node.key || node.right.key < node.key) {
            return false;
        }
        return true;
    }
}

var list = [3, 4, 7, 3, 8, 9]

var binaryTree = new BinaryTree()
list.forEach(function(key){
    binaryTree.insert(key)
})

var result = binaryTree.isBinarySearchTree();

print(result);