enum Color {
    RED = "RED",
    BLACK = "BLACK"
}

class Node<K, V> {
    color: Color;
    key: K;
    value: V;
    left: Node<K, V> | null;
    right: Node<K, V> | null;
    parent: Node<K, V> | null;

    constructor(key: K, value: V) {
        this.color = Color.RED; // New nodes are red
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree<K, V> {
    private root: Node<K, V> | null = null;

    private rotateLeft(node: Node<K, V>) {
        const rightChild = node.right;
        node.right = rightChild?.left || null;

        if (rightChild?.left) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<K, V>) {
        const leftChild = node.left;
        node.left = leftChild?.right || null;

        if (leftChild?.right) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixInsert(node: Node<K, V>) {
        while (node !== this.root && node.parent?.color === Color.RED) {
            if (node.parent === node.parent.parent?.left) {
                const uncle = node.parent.parent.right;
                if (uncle?.color === Color.RED) {
                    // Case 1: Uncle is red
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        // Case 2: Node is right child
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    // Case 3: Node is left child
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
                if (uncle?.color === Color.RED) {
                    // Case 1: Uncle is red
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        // Case 2: Node is left child
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    // Case 3: Node is right child
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public insert(key: K, value: V) {
        const newNode = new Node(key, value);
        let parent: Node<K, V> | null = null;
        let current: Node<K, V> | null = this.root;

        while (current) {
            parent = current;
            if (newNode.key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;

        if (parent === null) {
            this.root = newNode; // Tree was empty
        } else if (newNode.key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixInsert(newNode);
    }

    public find(key: K): V | null {
        let current: Node<K, V> | null = this.root;
        while (current) {
            if (key === current.key) {
                return current.value;
            } else if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null; // Key not found
    }

    public inorderTraversal(node: Node<K, V> | null = this.root): void {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.key, node.value);
            this.inorderTraversal(node.right);
        }
    }

    public getRoot(): Node<K, V> | null {
        return this.root;
    }
}

// Example Usage
const rbTree = new RedBlackTree<number, string>();
rbTree.insert(10, "Ten");
rbTree.insert(20, "Twenty");
rbTree.insert(30, "Thirty");
rbTree.insert(15, "Fifteen");

console.log("Inorder Traversal:");
rbTree.inorderTraversal();   // Outputs in sorted order
