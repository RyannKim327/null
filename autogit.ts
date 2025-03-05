enum Color {
    RED,
    BLACK
}

class Node<T> {
    public color: Color;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;
    public value: T;

    constructor(value: T) {
        this.value = value;
        this.color = Color.RED; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    private rotateLeft(node: Node<T>): void {
        const rightChild = node.right;
        if (!rightChild) return;

        node.right = rightChild.left;
        if (rightChild.left) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild; // Node is root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>): void {
        const leftChild = node.left;
        if (!leftChild) return;

        node.left = leftChild.right;
        if (leftChild.right) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (!node.parent) {
            this.root = leftChild; // Node is root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixViolation(node: Node<T>): void {
        while (node !== this.root && node.parent?.color === Color.RED) {
            if (node.parent === node.parent.parent?.left) {
                const uncle = node.parent.parent.right;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        // Case 2: Node is right child
                        this.rotateLeft(node.parent);
                        node = node.left!;
                    }
                    // Case 3: Node is left child
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        // Case 2: Node is left child
                        this.rotateRight(node.parent);
                        node = node.right!;
                    }
                    // Case 3: Node is right child
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: T): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root is always black
            return;
        }

        let parent: Node<T> | null = null;
        let current: Node<T> | null = this.root;

        while (current) {
            parent = current;
            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixViolation(newNode);
    }

    // Additional methods like delete, search, and traversal can be added here
}

// Example usage
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
