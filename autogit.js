// Node class represents each node in the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BinaryTree class manages the structure of the binary tree
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Function to insert a new node into the tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
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

    // Function to perform an in-order traversal of the tree
    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }
}

// Sample usage
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

binaryTree.inOrderTraversal(binaryTree.root, value => {
    console.log(value);
});
