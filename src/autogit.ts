enum Color {
    RED,
    BLACK,
}

class Node<T> {
    public color: Color;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;
    public value: T;

    constructor(value: T) {
        this.value = value;
        this.color = Color.RED; // New nodes are always red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class RedBlackTree<T> {
    private root: Node<T> | null = null;

    public insert(value: T): void {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolations(newNode);
    }

    private insertNode(root: Node<T> | null, node: Node<T>): Node<T> {
        if (!root) {
            return node; // Tree is empty
        }

        if (node.value < root.value) {
            root.left = this.insertNode(root.left, node);
            root.left!.parent = root; // Set parent
        } else {
            root.right = this.insertNode(root.right, node);
            root.right!.parent = root; // Set parent
        }
        return root;
    }

    private fixViolations(node: Node<T>): void {
        let current = node;

        while (current !== this.root && current.parent!.color === Color.RED) {
            const parent = current.parent!;
            const grandparent = parent.parent;

            if (parent === grandparent!.left) {
                const uncle = grandparent.right;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    current = grandparent;
                } else {
                    if (current === parent.right) {
                        // Case 2: Current is right child
                        this.rotateLeft(parent);
                        current = parent;
                        parent = current.parent!;
                    }
                    // Case 3: Current is left child
                    this.rotateRight(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    current = parent;
                }
            } else {
                const uncle = grandparent.left;
                if (uncle && uncle.color === Color.RED) {
                    // Case 1: Uncle is red
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    current = grandparent;
                } else {
                    if (current === parent.left) {
                        // Case 2: Current is left child
                        this.rotateRight(parent);
                        current = parent;
                        parent = current.parent!;
                    }
                    // Case 3: Current is right child
                    this.rotateLeft(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    current = parent;
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure root is black
    }

    private rotateLeft(node: Node<T>): void {
        const rightChild = node.right!;
        node.right = rightChild.left;
        if (rightChild.left) rightChild.left.parent = node;

        rightChild.parent = node.parent!;
        if (!node.parent) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>): void {
        const leftChild = node.left!;
        node.left = leftChild.right;
        if (leftChild.right) leftChild.right.parent = node;

        leftChild.parent = node.parent!;
        if (!node.parent) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    // Additional methods for deletion, traversal, etc. can be added here...
}
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(15);

// You can extend thisimplementation by adding methods for deletion, traversal, etc.
