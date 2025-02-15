enum Color {
    RED,
    BLACK
}

class Node<T> {
    value: T;
    color: Color;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.color = Color.RED; // New nodes are red initially
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(node: Node<T>) {
        const rightChild = node.right;
        if (rightChild === null) return;

        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        
        rightChild.parent = node.parent;

        if (node.parent === null) {
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
        if (leftChild === null) return;

        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild; // Node was root
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixViolation(node: Node<T>) {
        while (node !== this.root && node.parent?.color === Color.RED) {
            const parent = node.parent;
            const grandparent = parent.parent;

            if (parent === grandparent?.left) {
                const uncle = grandparent.right;

                if (uncle?.color === Color.RED) { 
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    [parent.color, grandparent.color] = [Color.BLACK, Color.RED];
                    node = parent; 
                }
            } else { // Symmetric case
                const uncle = grandparent.left;

                if (uncle?.color === Color.RED) {
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    [parent.color, grandparent.color] = [Color.BLACK, Color.RED];
                    node = parent;
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public insert(value: T) {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: Node<T> | null, node: Node<T>): Node<T> | null {
        if (root === null) {
            return node;
        }

        if (node.value < root.value) {
            root.left = this.insertNode(root.left, node);
            root.left.parent = root;
        } else if (node.value > root.value) {
            root.right = this.insertNode(root.right, node);
            root.right.parent = root;
        }
        return root;
    }

    public search(value: T): Node<T> | null {
        return this.searchNode(this.root, value);
    }

    private searchNode(root: Node<T> | null, value: T): Node<T> | null {
        if (root === null || value === root.value) {
            return root;
        }

        if (value < root.value) {
            return this.searchNode(root.left, value);
        } else {
            return this.searchNode(root.right, value);
        }
    }
}
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(15);

const searchNode = rbTree.search(15);
console.log(searchNode ? `Found: ${searchNode.value}` : 'Node not found');
