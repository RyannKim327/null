class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (node === null) {
            return false;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return true;
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(8);

console.log(bst.search(5)); // true
console.log(bst.search(20)); // false

bst.inOrderTraversal(bst.root);
