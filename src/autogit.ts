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
        if (!rightChild) return;

        node.right = rightChild.left;

        if (rightChild.left) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild; // Node was root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>) {
        const leftChild = node.left;
        if (!leftChild) return;

        node.left = leftChild.right;

        if (leftChild.right) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (!node.parent) {
            this.root = leftChild; // Node was root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixInsert(node: Node<T>) {
        while (node !== this.root && node.parent?.color === Color.RED) {
            if (node.parent === node.parent.parent?.left) {
                const uncle = node.parent.parent?.right;

                if (uncle?.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }

                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent?.left;

                if (uncle?.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }

                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: T) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root is black
            return;
        }

        let current: Node<T> | null = this.root;
        let parent: Node<T> | null = null;

        while (current) {
            parent = current;
            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;

        if (newNode.value < parent!.value) {
            parent!.left = newNode;
        } else {
            parent!.right = newNode;
        }

        this.fixInsert(newNode);
    }

    public search(value: T): Node<T> | null {
        let current: Node<T> | null = this.root;

        while (current) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null; // Not found
    }

    public inorderTraversal(node: Node<T> | null = this.root): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    public getRoot(): Node<T> | null {
        return this.root;
    }
}

// Example usage
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.insert(25);
rbTree.insert(5);

console.log("Inorder Traversal:");
rbTree.inorderTraversal(); // Should print sorted values
