class Node {
    data: number;
    color: 'red' | 'black';
    left: Node | null;
    right: Node | null;
    parent: Node | null;

    constructor(data: number) {
        this.data = data;
        this.color = 'red'; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    private root: Node | null = null;

    // Helper methods for rotations and fixing properties
    private rotateLeft(x: Node): void {
        const y = x.right!;
        x.right = y.left;
        if (y.left) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (!x.parent) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    private rotateRight(y: Node): void {
        const x = y.left!;
        y.left = x.right;
        if (x.right) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (!y.parent) {
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    private fixInsert(z: Node): void {
        while (z.parent && z.parent.color === 'red') {
            if (z.parent === z.parent.parent?.left) {
                const y = z.parent.parent?.right; // y is the uncle node
                if (y && y.color === 'red') {
                    // Case 1: Uncle is red
                    z.parent.color = 'black';
                    y.color = 'black';
                    z.parent.parent!.color = 'red';
                    z = z.parent.parent!;
                } else {
                    // Case 2 & 3: Uncle is black
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    z.parent.color = 'black';
                    z.parent.parent!.color = 'red';
                    this.rotateRight(z.parent.parent!);
                }
            } else {
                const y = z.parent.parent?.left; // y is the uncle node
                if (y && y.color === 'red') {
                    // Case 1: Uncle is red
                    z.parent.color = 'black';
                    y.color = 'black';
                    z.parent.parent!.color = 'red';
                    z = z.parent.parent!;
                } else {
                    // Case 2 & 3: Uncle is black
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = 'black';
                    z.parent.parent!.color = 'red';
                    this.rotateLeft(z.parent.parent!);
                }
            }
        }
        this.root!.color = 'black'; // Ensure the root is black
    }

    insert(data: number): void {
        const newNode = new Node(data);
        this.root = this.insertNode(this.root, newNode);
        this.fixInsert(newNode);
    }

    private insertNode(root: Node | null, node: Node): Node {
        if (root === null) {
            return node;
        }
        if (node.data < root.data) {
            root.left = this.insertNode(root.left, node);
            root.left!.parent = root; // Set parent
        } else {
            root.right = this.insertNode(root.right, node);
            root.right!.parent = root; // Set parent
        }
        return root;
    }

    search(data: number): Node | null {
        return this.searchNode(this.root, data);
    }

    private searchNode(root: Node | null, data: number): Node | null {
        if (root === null || root.data === data) {
            return root;
        }
        if (data < root.data) {
            return this.searchNode(root.left, data);
        } else {
            return this.searchNode(root.right, data);
        }
    }

    inOrderTraversal(node: Node | null = this.root): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data, node.color);
            this.inOrderTraversal(node.right);
        }
    }
}

// Usage Example
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log('In Order Traversal:');
rbTree.inOrderTraversal();

const searchNode = rbTree.search(15);
console.log('Search for 15:', searchNode ? 'Found' : 'Not found');
