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
        this.color = Color.RED; // New nodes are red by default
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

    private fixInsert(z: Node<T>): void {
        while (z.parent && z.parent.color === Color.RED) {
            if (z.parent === z.parent.parent?.left) {
                const y = z.parent.parent?.right;
                if (y && y.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.rotateRight(z.parent.parent!);
                }
            } else {
                const y = z.parent.parent?.left;
                if (y && y.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.rotateLeft(z.parent.parent!);
                }
            }
        }
        this.root!.color = Color.BLACK;
    }

    public insert(value: T): void {
        const newNode = new Node(value);
        let y: Node<T> | null = null;
        let x: Node<T> | null = this.root;

        while (x !== null) {
            y = x;
            if (newNode.value < x.value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = y;

        if (y === null) {
            this.root = newNode;
        } else if (newNode.value < y.value) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }

        this.fixInsert(newNode);
    }

    public inorderTraversal(node: Node<T> | null = this.root): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
rbt.insert(30);
rbt.insert(25);

console.log("Inorder Traversal:");
rbt.inorderTraversal(); // Output: 10, 15, 20, 25, 30
