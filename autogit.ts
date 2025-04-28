class Node {
    public data: number;
    public color: 'RED' | 'BLACK';
    public left: Node | null;
    public right: Node | null;
    public parent: Node | null;

    constructor(data: number) {
        this.data = data;
        this.color = 'RED'; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    private root: Node | null;

    constructor() {
        this.root = null;
    }

    private rotateLeft(node: Node) {
        const rightNode = node.right;
        if (!rightNode) return;

        node.right = rightNode.left;
        if (rightNode.left) {
            rightNode.left.parent = node;
        }

        rightNode.parent = node.parent;
        if (!node.parent) {
            this.root = rightNode;
        } else if (node === node.parent.left) {
            node.parent.left = rightNode;
        } else {
            node.parent.right = rightNode;
        }

        rightNode.left = node;
        node.parent = rightNode;
    }

    private rotateRight(node: Node) {
        const leftNode = node.left;
        if (!leftNode) return;

        node.left = leftNode.right;
        if (leftNode.right) {
            leftNode.right.parent = node;
        }

        leftNode.parent = node.parent;
        if (!node.parent) {
            this.root = leftNode;
        } else if (node === node.parent.right) {
            node.parent.right = leftNode;
        } else {
            node.parent.left = leftNode;
        }

        leftNode.right = node;
        node.parent = leftNode;
    }

    private fixViolation(node: Node) {
        let currentNode = node;

        while (currentNode !== this.root && currentNode.parent?.color === 'RED') {
            const parentNode = currentNode.parent;
            const grandParentNode = parentNode.parent;

            // Case A: Parent is a left child
            if (parentNode === grandParentNode.left) {
                const uncleNode = grandParentNode.right;
                if (uncleNode && uncleNode.color === 'RED') {
                    // Case A1: Uncle is red
                    grandParentNode.color = 'RED';
                    parentNode.color = 'BLACK';
                    uncleNode.color = 'BLACK';
                    currentNode = grandParentNode;
                } else {
                    // Case A2: Uncle is black
                    if (currentNode === parentNode.right) {
                        this.rotateLeft(parentNode);
                        currentNode = parentNode;
                        parentNode = currentNode.parent!;
                    }
                    this.rotateRight(grandParentNode);
                    [parentNode.color, grandParentNode.color] = [grandParentNode.color, parentNode.color];
                    currentNode = parentNode;
                }
            } else {
                // Case B: Parent is a right child
                const uncleNode = grandParentNode.left;
                if (uncleNode && uncleNode.color === 'RED') {
                    // Case B1: Uncle is red
                    grandParentNode.color = 'RED';
                    parentNode.color = 'BLACK';
                    uncleNode.color = 'BLACK';
                    currentNode = grandParentNode;
                } else {
                    // Case B2: Uncle is black
                    if (currentNode === parentNode.left) {
                        this.rotateRight(parentNode);
                        currentNode = parentNode;
                        parentNode = currentNode.parent!;
                    }
                    this.rotateLeft(grandParentNode);
                    [parentNode.color, grandParentNode.color] = [grandParentNode.color, parentNode.color];
                    currentNode = parentNode;
                }
            }
        }

        this.root.color = 'BLACK';
    }

    public insert(data: number) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            this.root.color = 'BLACK'; // Make the root black
        } else {
            let currentNode: Node | null = this.root;
            let parentNode: Node | null = null;

            while (currentNode) {
                parentNode = currentNode;
                if (newNode.data < currentNode.data) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }

            newNode.parent = parentNode;
            if (newNode.data < parentNode.data) {
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }

            // Fix the red-black tree properties
            this.fixViolation(newNode);
        }
    }

    // Optional: In-order traversal for checking the tree
    public inOrderTraversal(node: Node | null = this.root): number[] {
        if (!node) return [];
        return [
            ...this.inOrderTraversal(node.left),
            node.data,
            ...this.inOrderTraversal(node.right),
        ];
    }

    public getRoot(): Node | null {
        return this.root;
    }
}

// Usage
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
rbt.insert(30);
console.log(rbt.inOrderTraversal()); // Output: [10, 15, 20, 30]
