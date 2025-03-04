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
            this.root = y;
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
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }

        x.right = y;
        y.parent = x;
    }

    private fixInsert(z: Node) {
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

    public insert(value: number) {
        const newNode = new Node(value);
        let y: Node | null = null;
        let x: Node | null = this.root;

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

    public inorderTraversal(node: Node | null = this.root): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(...this.inorderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inorderTraversal(node.right));
        }
        return result;
    }

    public getRoot(): Node | null {
        return this.root;
    }
}

// Example usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log(rbTree.inorderTraversal()); // Output: [10, 15, 20, 30]
