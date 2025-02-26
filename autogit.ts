enum Color {
    RED = "RED",
    BLACK = "BLACK"
}

class Node<T> {
    public color: Color;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;
    public value: T;

    constructor(value: T) {
        this.value = value;
        this.color = Color.RED; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(x: Node<T>): void {
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

    private rotateRight(y: Node<T>): void {
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

    private fixViolation(x: Node<T>): void {
        while (x !== this.root && x.parent?.color === Color.RED) {
            const parent = x.parent;
            const grandparent = parent?.parent;

            if (parent === grandparent?.left) {
                const uncle = grandparent.right;
                if (uncle?.color === Color.RED) {
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    x = grandparent;
                } else {
                    if (x === parent.right) {
                        this.rotateLeft(parent);
                        x = parent;
                        parent = x.parent;
                    }
                    this.rotateRight(grandparent);
                    const temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    x = parent;
                }
            } else {
                const uncle = grandparent.left;
                if (uncle?.color === Color.RED) {
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    x = grandparent;
                } else {
                    if (x === parent.left) {
                        this.rotateRight(parent);
                        x = parent;
                        parent = x.parent;
                    }
                    this.rotateLeft(grandparent);
                    const temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    x = parent;
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: T): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root must always be black
            return;
        }

        let current: Node<T> | null = this.root;
        let parent: Node<T> | null = null;

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

        this.fixViolation(newNode);
    }

    // Additional tree methods (search, delete, traversal) can be implemented here
}
