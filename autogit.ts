class Node<T> {
    public color: 'RED' | 'BLACK';
    public key: T;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;

    constructor(key: T) {
        this.key = key;
        this.color = 'RED';  // New nodes are red
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

    // Insert a key into the red-black tree
    public insert(key: T): void {
        const newNode = new Node(key);
        this.root = this BSTInsert(this.root, newNode);
        this.fixViolations(newNode);
    }

    private BSTInsert(root: Node<T> | null, newNode: Node<T>): Node<T> {
        if (root === null) {
            return newNode;
        }

        if (newNode.key < root.key) {
            root.left = this.BSTInsert(root.left, newNode);
            root.left!.parent = root;
        } else if (newNode.key > root.key) {
            root.right = this.BSTInsert(root.right, newNode);
            root.right!.parent = root;
        }
        
        return root;
    }

    private fixViolations(node: Node<T>): void {
        let currentNode = node;

        while (currentNode !== this.root && currentNode.parent?.color === 'RED') {
            const parent = currentNode.parent;
            const grandparent = parent?.parent;

            if (parent === grandparent?.left) {
                const uncle = grandparent.right;

                if (uncle?.color === 'RED') {
                    parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandparent.color = 'RED';
                    currentNode = grandparent;
                } else {
                    if (currentNode === parent.right) {
                        this.rotateLeft(parent);
                        currentNode = parent;
                        parent = currentNode.parent; 
                    }
                    this.rotateRight(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    currentNode = parent;
                }
            } else {
                const uncle = grandparent?.left;

                if (uncle?.color === 'RED') {
                    parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandparent.color = 'RED';
                    currentNode = grandparent;
                } else {
                    if (currentNode === parent.left) {
                        this.rotateRight(parent);
                        currentNode = parent;
                        parent = currentNode.parent;
                    }
                    this.rotateLeft(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    currentNode = parent;
                }
            }
        }

        this.root.color = 'BLACK'; // Ensure the root is always black
    }

    private rotateLeft(node: Node<T>): void {
        const rightChild = node.right;
        node.right = rightChild?.left ?? null;

        if (node.right) {
            node.right.parent = node;
        }

        rightChild!.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild; // Node is root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild!.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node<T>): void {
        const leftChild = node.left;
        node.left = leftChild?.right ?? null;

        if (node.left) {
            node.left.parent = node;
        }

        leftChild!.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild; // Node is root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild!.right = node;
        node.parent = leftChild;
    }

    // You can implement additional methods like delete and traversals as needed
}

// Example usage:
let rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
