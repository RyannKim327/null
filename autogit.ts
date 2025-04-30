enum Color {
    RED = 'RED',
    BLACK = 'BLACK',
}

class Node<T> {
    public data: T;
    public color: Color;
    public left: Node<T> | null = null;
    public right: Node<T> | null = null;
    public parent: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
        this.color = Color.RED; // New nodes are initially red
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(node: Node<T>): Node<T> {
        const rightChild = node.right!;
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

        return rightChild;
    }

    private rotateRight(node: Node<T>): Node<T> {
        const leftChild = node.left!;
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

        return leftChild;
    }

    private fixViolation(newNode: Node<T>): void {
        while (newNode !== this.root && newNode.parent!.color === Color.RED) {
            const parent = newNode.parent!;
            const grandparent = parent.parent;

            if (parent === grandparent!.left) {
                const uncle = grandparent.right;

                if (uncle && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent;
                } else {
                    if (newNode === parent.right) {
                        this.rotateLeft(parent);
                        newNode = parent;
                        parent = newNode.parent!;
                    }
                    this.rotateRight(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    newNode = parent;
                }
            } else {
                const uncle = grandparent.left;

                if (uncle && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent;
                } else {
                    if (newNode === parent.left) {
                        this.rotateRight(parent);
                        newNode = parent;
                        parent = newNode.parent!;
                    }
                    this.rotateLeft(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    newNode = parent;
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public insert(data: T): void {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            this.root.color = Color.BLACK; // root must be black
            return;
        }

        let parent: Node<T> | null = null;
        let current: Node<T> | null = this.root;

        while (current) {
            parent = current;
            if (newNode.data < current.data) {
                current = current.left;
            } else if (newNode.data > current.data) {
                current = current.right;
            } else {
                return; // Duplicates are not allowed
            }
        }

        newNode.parent = parent;

        if (newNode.data < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixViolation(newNode);
    }

    // You can add additional methods such as search, delete, etc. as needed.
    
    // For debugging purposes
    public inorderTraversal(node: Node<T> | null = this.root): void {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.data, node.color);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log("Inorder Traversal of the constructed Red-Black Tree:");
rbTree.inorderTraversal();
