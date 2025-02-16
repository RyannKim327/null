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
    private root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    private rotateLeft(node: Node<T>): void {
        const rightChild = node.right!;
        node.right = rightChild.left;

        if (rightChild.left) {
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

    private rotateRight(node: Node<T>): void {
        const leftChild = node.left!;
        node.left = leftChild.right;

        if (leftChild.right) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixViolation(newNode: Node<T>): void {
        let parent = newNode.parent;
        let grandparent: Node<T> | null;

        while (parent && parent.color === Color.RED) {
            grandparent = parent.parent;

            if (parent === grandparent?.left) {
                const uncle = grandparent.right;

                if (uncle && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent; // Move up the tree
                } else {
                    if (newNode === parent.right) {
                        this.rotateLeft(parent);
                        newNode = parent;
                        parent = newNode.parent;
                    }

                    if (parent) {
                        parent.color = Color.BLACK;
                        if (grandparent) {
                            grandparent.color = Color.RED;
                            this.rotateRight(grandparent);
                        }
                    }
                }
            } else {
                const uncle = grandparent.left;

                if (uncle && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent; // Move up the tree
                } else {
                    if (newNode === parent.left) {
                        this.rotateRight(parent);
                        newNode = parent;
                        parent = newNode.parent;
                    }

                    if (parent) {
                        parent.color = Color.BLACK;
                        if (grandparent) {
                            grandparent.color = Color.RED;
                            this.rotateLeft(grandparent);
                        }
                    }
                }
            }
        }

        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: T): void {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: Node<T> | null, newNode: Node<T>): Node<T> {
        if (root === null) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left!.parent = root;
        } else {
            root.right = this.insertNode(root.right, newNode);
            root.right!.parent = root;
        }

        return root;
    }

    public inorder(): T[] {
        const result: T[] = [];
        this.inorderHelper(this.root, result);
        return result;
    }

    private inorderHelper(node: Node<T> | null, result: T[]): void {
        if (node) {
            this.inorderHelper(node.left, result);
            result.push(node.value);
            this.inorderHelper(node.right, result);
        }
    }
}

// Example usage
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
console.log(rbt.inorder()); // Output: [10, 15, 20]
