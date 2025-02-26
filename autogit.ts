enum Color {
    RED = 'RED',
    BLACK = 'BLACK',
}

class Node {
    value: number;
    color: Color;
    left: Node | null;
    right: Node | null;
    parent: Node | null;

    constructor(value: number) {
        this.value = value;
        this.color = Color.RED; // New nodes are always inserted as red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    private rotateLeft(node: Node): Node {
        const rightChild = node.right!;
        node.right = rightChild.left;

        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild; // Update root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;

        return rightChild;
    }

    private rotateRight(node: Node): Node {
        const leftChild = node.left!;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild; // Update root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;

        return leftChild;
    }

    private fixViolation(node: Node): void {
        let parent = node.parent;
        let grandParent: Node | null;

        while (parent && parent.color === Color.RED) {
            grandParent = parent.parent;

            if (parent === grandParent?.left) {
                const uncle = grandParent.right;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandParent.color = Color.RED;
                    node = grandParent;
                } else {
                    if (node === parent.right) {
                        // Case 2: Node is right child
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent!;
                    }
                    // Case 3: Node is left child
                    this.rotateRight(grandParent!);
                    const temp = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = temp;
                    node = parent;
                }
            } else {
                const uncle = grandParent.left;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandParent.color = Color.RED;
                    node = grandParent;
                } else {
                    if (node === parent.left) {
                        // Case 2: Node is left child
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent!;
                    }
                    // Case 3: Node is right child
                    this.rotateLeft(grandParent!);
                    const temp = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = temp;
                    node = parent;
                }
            }
            parent = node.parent;
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    insert(value: number): void {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: Node | null, newNode: Node): Node {
        if (root === null) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left.parent = root;
        } else if (newNode.value > root.value) {
            root.right = this.insertNode(root.right, newNode);
            root.right.parent = root;
        }
        
        return root;
    }
}

// Usage Example
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
