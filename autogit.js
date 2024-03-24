// Node class to represent each node in the binary tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class to represent the binary tree
class BinarySearchTree {
    constructor() {
        // root of the binary tree
        this.root = null;
    }
    
    // function to insert a new node with given data
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    
    // recursive function to insert a new node in the binary tree
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
    
    // function to traverse the binary tree in inorder (left -> root -> right) fashion
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(8);

// Print the binary tree in inorder traversal
bst.inorder(bst.root);
