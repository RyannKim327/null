enum Color {
    RED = 'RED',
    BLACK = 'BLACK',
}

class Node<T> {
    public  T;
    public color: Color;
    public left: Node<T> | null = null;
    public right: Node<T> | null = null;
    public parent: Node<T> | null = null;

    constructor( T) {
        this.data = data;
        this.color = Color.RED; // New nodes are red
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;

    private rotateLeft(x: Node<T>): void {
        const y = x.right;
        if (!y) return;
        
        x.right = y.left;
        if (y.left) y.left.parent = x;

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

    private rotateRight(y: Node<T>): void {
        const x = y.left;
        if (!x) return;

        y.left = x.right;
        if (x.right) x.right.parent = y;

        x.parent = y.parent;
        if (!y.parent) {
            this.root = x;
        } else if (y === y.parent.left) {
            y.parent.left = x;
        } else {
            y.parent.right = x;
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
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.rotateRight(z.parent.parent);
                }
            } else {
                const y = z.parent.parent?.left;
                if (y && y.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.rotateLeft(z.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public insert( T): void {
        const z = new Node<T>(data);
        let y: Node<T> | null = null;
        let x: Node<T> | null = this.root;

        while (x) {
            y = x;
            if (z.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        z.parent = y;
        if (!y) {
            this.root = z;
        } else if (z.data < y.data) {
            y.left = z;
        } else {
            y.right = z;
        }

        this.fixInsert(z);
    }

    // Additional methods for deletion, traversal, etc. can be implemented similarly
}

// Example usage
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);

console.log(rbTree);
