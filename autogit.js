class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color || 'red';
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            this.root.color = 'black';
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}

// Usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);

console.log(tree.root); // Output the root node of the red-black tree
