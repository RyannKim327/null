// Node class to represent a node in the binary search tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the binary search tree
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Method to search for a value in the binary search tree
    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true;
        }
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);

console.log(bst.search(4)); // Output: true
console.log(bst.search(6)); // Output: false
