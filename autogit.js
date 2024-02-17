class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value, "red");
        if (!this.root) {
            this.root = newNode;
            this.root.color = "black";
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(rootNode, newNode) {
        if (newNode.value < rootNode.value) {
            if (rootNode.left === null) {
                rootNode.left = newNode;
                newNode.parent = rootNode;
            } else {
                this.insertNode(rootNode.left, newNode);
            }
        } else {
            if (rootNode.right === null) {
                rootNode.right = newNode;
                newNode.parent = rootNode;
            } else {
                this.insertNode(rootNode.right, newNode);
            }
        }
    }

    // Other methods like delete, rotate, balance can be added here

    // Print the tree in-order
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(11);
tree.insert(3);

tree.inOrderTraversal(tree.root);
