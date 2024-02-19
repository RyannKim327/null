class Node { 
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        const newNode = new Node(data);
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
