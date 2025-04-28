enum Color {
    RED = 'RED',
    BLACK = 'BLACK'
}

class Node<T> {
    color: Color;
    data: T;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.color = Color.RED; // New nodes are always red when added
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

    private rotateLeft(node: Node<T>) {
        const rightChild = node.right;
        node.right = rightChild!.left;

        if (rightChild!.left) {
            rightChild!.left.parent = node;
        }

        rightChild!.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild; // Node was root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild; // node is a left child
        } else {
            node.parent.right = rightChild; // node is a right child
        }

        rightChild!.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>) {
        const leftChild = node.left;
        node.left = leftChild!.right;

        if (leftChild!.right) {
            leftChild!.right.parent = node;
        }

        leftChild!.parent = node.parent;

        if (!node.parent) {
            this.root = leftChild; // Node was root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild; // node is a right child
        } else {
            node.parent.left = leftChild; // node is a left child
        }

        leftChild!.right = node;
        node.parent = leftChild;
    }

    private fixViolations(node: Node<T>) {
        while (node !== this.root && node.parent!.color === Color.RED) {
            const parent = node.parent!;
            const grandparent = parent.parent;

            if (parent === grandparent!.left) {
                const uncle = grandparent.right;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        // Case 2: Node is right child
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent!; // Update parent
                    }
                    // Case 3: Node is left child
                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    this.rotateRight(grandparent);
                }
            } else {
                const uncle = grandparent.left;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        // Case 2: Node is left child
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent!; // Update parent
                    }
                    // Case 3: Node is right child
                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    this.rotateLeft(grandparent);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(data: T) {
        const newNode = new Node<T>(data);
        if (!this.root) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root is always black
        } else {
            this.insertNode(this.root, newNode);
            this.fixViolations(newNode);
        }
    }

    private insertNode(current: Node<T>, newNode: Node<T>) {
        if (newNode.data < current.data) {
            if (!current.left) {
                current.left = newNode;
                newNode.parent = current;
            } else {
                this.insertNode(current.left, newNode);
            }
        } else {
            if (!current.right) {
                current.right = newNode;
                newNode.parent = current;
            } else {
                this.insertNode(current.right, newNode);
            }
        }
    }

    // Function to perform in-order traversal
    public inOrderTraversal(node: Node<T> | null = this.root): T[] {
        if (!node) return [];
        return [
            ...this.inOrderTraversal(node.left),
            node.data,
            ...this.inOrderTraversal(node.right),
        ];
    }
}

// Example usage
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(3);
console.log(tree.inOrderTraversal()); // Output: [3, 5, 10, 20]
