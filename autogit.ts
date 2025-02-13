class Node<T> {
    public data: T;
    public color: 'RED' | 'BLACK';
    public left: Node<T> | null = null;
    public right: Node<T> | null = null;
    public parent: Node<T> | null = null;

    constructor(data: T, color: 'RED' | 'BLACK') {
        this.data = data;
        this.color = color;
    }
}

class RedBlackTree<T> {
    private root: Node<T> | null = null;
    private TNULL: Node<T>;

    constructor() {
        this.TNULL = new Node<T>({} as T, 'BLACK'); // An empty leaf (NIL node)
        this.root = this.TNULL;
    }

    private leftRotate(x: Node<T>) {
        const y = x.right!;
        x.right = y.left;

        if (y.left !== this.TNULL) {
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

    private rightRotate(x: Node<T>) {
        const y = x.left!;
        x.left = y.right;

        if (y.right !== this.TNULL) {
            y.right.parent = x;
        }

        y.parent = x.parent;

        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }

        y.right = x;
        x.parent = y;
    }

    private fixInsert(k: Node<T>) {
        let u: Node<T>;
        while (k.parent!.color === 'RED') {
            if (k.parent === k.parent.parent!.left) {
                u = k.parent.parent!.right!; // uncle

                if (u.color === 'RED') {
                    // case 3.1
                    u.color = 'BLACK';
                    k.parent.color = 'BLACK';
                    k.parent.parent!.color = 'RED';
                    k = k.parent.parent!;
                } else {
                    if (k === k.parent.right) {
                        // case 3.2.2
                        k = k.parent;
                        this.leftRotate(k);
                    }
                    // case 3.2.1
                    k.parent.color = 'BLACK';
                    k.parent.parent!.color = 'RED';
                    this.rightRotate(k.parent.parent!);
                }
            } else {
                u = k.parent.parent!.left; // uncle

                if (u.color === 'RED') {
                    // mirror case 3.1
                    u.color = 'BLACK';
                    k.parent.color = 'BLACK';
                    k.parent.parent!.color = 'RED';
                    k = k.parent.parent!;
                } else {
                    if (k === k.parent.left) {
                        // mirror case 3.2.2
                        k = k.parent;
                        this.rightRotate(k);
                    }
                    // mirror case 3.2.1
                    k.parent.color = 'BLACK';
                    k.parent.parent!.color = 'RED';
                    this.leftRotate(k.parent.parent!);
                }
            }
            if (k === this.root) {
                break;
            }
        }
        this.root.color = 'BLACK';
    }

    public insert(data: T) {
        const node = new Node(data, 'RED');
        node.left = this.TNULL;
        node.right = this.TNULL;

        let y: Node<T> | null = null;
        let x: Node<T> | null = this.root;

        while (x !== this.TNULL) {
            y = x;
            if (node.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        node.parent = y;
        if (y === null) {
            this.root = node;
        } else if (node.data < y.data) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent === null) {
            node.color = 'BLACK';
            return;
        }

        if (node.parent.parent === null) {
            return;
        }

        this.fixInsert(node);
    }

    public inorderTraversal() {
        this.inorderHelper(this.root);
    }

    private inorderHelper(node: Node<T> | null) {
        if (node !== this.TNULL) {
            this.inorderHelper(node.left);
            console.log(node.data);
            this.inorderHelper(node.right);
        }
    }
}

// Example usage
const tree = new RedBlackTree<number>();
tree.insert(55);
tree.insert(40);
tree.insert(65);
tree.insert(30);
tree.insert(50);
tree.insert(70);
tree.insert(75);
console.log("Inorder Traversal: ");
tree.inorderTraversal(); // Outputs the values in sorted order
