enum Color {
    RED,
    BLACK
}

class Node {
    public color: Color;
    public left: Node | null;
    public right: Node | null;
    public parent: Node | null;
    public value: number;

    constructor(value: number) {
        this.value = value;
        this.color = Color.RED; // New nodes are red by default
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

    private rotateLeft(x: Node) {
        const y = x.right!;
        x.right = y.left;

        if (y.left !== null) {
            y.left.parent = x;
        }

        y.parent = x.parent;

        if (x.parent === null) {
            this.root = y; // y becomes the new root
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }

        y.left = x;
        x.parent = y;
    }

    private rotateRight(y: Node) {
        const x = y.left!;
        y.left = x.right;

        if (x.right !== null) {
            x.right.parent = y;
        }

        x.parent = y.parent;

        if (y.parent === null) {
            this.root = x; // x becomes the new root
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }

        x.right = y;
        y.parent = x;
    }

    private fixViolation(z: Node) {
        while (z.parent && z.parent.color === Color.RED) {
            if (z.parent === z.parent.parent?.left) {
                const y = z.parent.parent?.right; // Uncle node

                if (y && y.color === Color.RED) {
                    // Case 1: Uncle is red
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.right) {
                        // Case 2: z is right child
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    // Case 3: z is left child
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.rotateRight(z.parent.parent!);
                }
            } else {
                const y = z.parent.parent?.left; // Uncle node

                if (y && y.color === Color.RED) {
                    // Case 1: Uncle is red
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.left) {
                        // Case 2: z is left child
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    // Case 3: z is right child
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.rotateLeft(z.parent.parent!);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: number) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root is always black
        } else {
            this.insertNode(this.root, newNode);
            this.fixViolation(newNode);
        }
    }

    private insertNode(root: Node, newNode: Node) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    public inorderTraversal(node: Node | null = this.root): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(...this.inorderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inorderTraversal(node.right));
        }
        return result;
    }
}

// Example
