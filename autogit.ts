enum Color {
    RED,
    BLACK,
}

class Node<T> {
    value: T;
    color: Color;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;

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

    private rotateLeft(x: Node<T>): void {
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

    private rotateRight(y: Node<T>): void {
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

    private fixInsertion(z: Node<T>): void {
        let y: Node<T> | null;

        while (z.parent?.color === Color.RED) {
            if (z.parent === z.parent.parent?.left) {
                y = z.parent.parent?.right;

                if (y?.color === Color.RED) { // Case 1
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.right) { // Case 2
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    // Case 3
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.rotateRight(z.parent.parent);
                }
            } else {
                y = z.parent.parent?.left;

                if (y?.color === Color.RED) { // Case 1
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.left) { // Case 2
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    // Case 3
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.rotateLeft(z.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public insert(value: T): void {
        const z = new Node(value);
        let y: Node<T> | null = null;
        let x: Node<T> | null = this.root;

        while (x !== null) {
            y = x;
            if (z.value < x.value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        z.parent = y;

        if (y === null) {
            this.root = z; // Tree was empty
        } else if (z.value < y.value) {
            y.left = z;
        } else {
            y.right = z;
        }

        this.fixInsertion(z);
    }

    public inorderTraversal(node: Node<T> | null = this.root): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value, node.color);
            this.inorderTraversal(node.right);
        }
    }

    public print(): void {
        this.inorderTraversal();
    }
}

// Usage
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.insert(25);
rbTree.print(); // Traverses tree in order and prints
