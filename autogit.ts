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
        this.color = Color.RED; // new nodes are always red
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

    private rotateLeft(x: Node): void {
        const y = x.right!;
        x.right = y.left;
        if (y.left !== null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
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
        if (x.right !== null) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent === null) {
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    private fixViolation(z: Node): void {
        while (z.parent && z.parent.color === Color.RED) {
            if (z.parent === z.parent.parent?.left) {
                const uncle = z.parent.parent?.right;
                if (uncle && uncle.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    z.parent.color = Color.BLACK;
                    if (z.parent.parent) {
                        z.parent.parent.color = Color.RED;
                        this.rotateRight(z.parent.parent);
                    }
                }
            } else {
                const uncle = z.parent.parent?.left;
                if (uncle && uncle.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = Color.BLACK;
                    if (z.parent.parent) {
                        z.parent.parent.color = Color.RED;
                        this.rotateLeft(z.parent.parent);
                    }
                }
            }
        }
        if (this.root) {
            this.root.color = Color.BLACK;
        }
    }

    public insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current: Node | null = this.root;
            let parent: Node | null = null;

            while (current !== null) {
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
        }
        this.fixViolation(newNode);
    }

    // Add traversal methods as needed...
}

// Usage
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
