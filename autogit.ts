enum Color {
    RED = 'RED',
    BLACK = 'BLACK'
}

class Node<T> {
    public color: Color;
    public key: T;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;

    constructor(key: T) {
        this.key = key;
        this.color = Color.RED; // New nodes are always red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(node: Node<T>) {
        const rightChild = node.right;
        node.right = rightChild?.left || null;

        if (rightChild?.left) {
            rightChild.left.parent = node;
        }

        rightChild!.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild!;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild!;
        } else {
            node.parent.right = rightChild!;
        }

        rightChild!.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>) {
        const leftChild = node.left;
        node.left = leftChild?.right || null;

        if (leftChild?.right) {
            leftChild.right.parent = node;
        }

        leftChild!.parent = node.parent;

        if (!node.parent) {
            this.root = leftChild!;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild!;
        } else {
            node.parent.left = leftChild!;
        }

        leftChild!.right = node;
        node.parent = leftChild;
    }

    private fixViolations(node: Node<T>) {
        while (node !== this.root && node.parent!.color === Color.RED) {
            if (node.parent === node.parent!.parent!.left) {
                const uncle = node.parent!.parent!.right;

                if (uncle && uncle.color === Color.RED) {
                    node.parent!.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    node = node.parent!.parent!;
                } else {
                    if (node === node.parent!.right) {
                        this.rotateLeft(node.parent!);
                        node = node.left!;
                    }
                    node.parent!.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    this.rotateRight(node.parent!.parent!);
                }
            } else {
                const uncle = node.parent!.parent!.left;

                if (uncle && uncle.color === Color.RED) {
                    node.parent!.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    node = node.parent!.parent!;
                } else {
                    if (node === node.parent!.left) {
                        this.rotateRight(node.parent!);
                        node = node.right!;
                    }
                    node.parent!.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    this.rotateLeft(node.parent!.parent!);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(key: T) {
        const newNode = new Node<T>(key);
        let parentNode: Node<T> | null = null;
        let currentNode: Node<T> | null = this.root;

        // Insert the node like in a regular binary search tree
        while (currentNode !== null) {
            parentNode = currentNode;
            if (newNode.key < currentNode.key) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        newNode.parent = parentNode;

        if (!parentNode) {
            this.root = newNode; // Tree was empty
        } else if (newNode.key < parentNode.key) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }

        // Fix violations
        this.fixViolations(newNode);
    }

    // Additional methods (search, delete, etc.) would be implemented here.
    
    public inorderTraversal(node: Node<T> | null = this.root): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.key, node.color);
            this.inorderTraversal(node.right);
        }
    }
}

// Example of using the RedBlackTree
const rbt = new RedBlackTree<number>();
rbt.insert(7);
rbt.insert(3);
rbt.insert(18);
rbt.insert(10);
rbt.insert(22);
rbt.insert(8);
rbt.insert(11);
rbt.insert(26);

console.log("Inorder Traversal of the Red-Black Tree:");
rbt.inorderTraversal();
