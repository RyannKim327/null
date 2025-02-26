class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the tree
    insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: Node, newNode: Node): void {
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

    // In-order traversal of the tree
    inOrderTraversal(node: Node | null, visit: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, visit);
            visit(node.value);
            this.inOrderTraversal(node.right, visit);
        }
    }

    // Pre-order traversal of the tree
    preOrderTraversal(node: Node | null, visit: (value: number) => void): void {
        if (node !== null) {
            visit(node.value);
            this.preOrderTraversal(node.left, visit);
            this.preOrderTraversal(node.right, visit);
        }
    }

    // Post-order traversal of the tree
    postOrderTraversal(node: Node | null, visit: (value: number) => void): void {
        if (node !== null) {
            this.postOrderTraversal(node.left, visit);
            this.postOrderTraversal(node.right, visit);
            visit(node.value);
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);

// To print in-order traversal
tree.inOrderTraversal(tree.root, (value) => console.log(value));
