enum Color {
    RED,
    BLACK
}

class Node {
    public left: Node | null = null;
    public right: Node | null = null;
    public parent: Node | null = null;
    public color: Color;
    public value: number;

    constructor(value: number) {
        this.value = value;
        this.color = Color.RED; // New nodes are red by default
    }
}

class RedBlackTree {
    private root: Node | null = null;

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

    private fixViolation(node: Node): void {
        let current = node;

        while (current.parent && current.parent.color === Color.RED) {
            if (current.parent === current.parent.parent?.left) {
                const uncle = current.parent.parent?.right;
                if (uncle && uncle.color === Color.RED) {
                    current.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    current.parent.parent.color = Color.RED;
                    current = current.parent.parent;
                } else {
                    if (current === current.parent.right) {
                        current = current.parent;
                        this.rotateLeft(current);
                    }
                    current.parent.color = Color.BLACK;
                    current.parent.parent.color = Color.RED;
                    this.rotateRight(current.parent.parent);
                }
            } else {
                const uncle = current.parent.parent?.left;
                if (uncle && uncle.color === Color.RED) {
                    current.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    current.parent.parent.color = Color.RED;
                    current = current.parent.parent;
                } else {
                    if (current === current.parent.left) {
                        current = current.parent;
                        this.rotateRight(current);
                    }
                    current.parent.color = Color.BLACK;
                    current.parent.parent.color = Color.RED;
                    this.rotateLeft(current.parent.parent);
                }
            }
        }

        this.root.color = Color.BLACK;
    }

    public insert(value: number): void {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: Node | null, newNode: Node): Node {
        if (root === null) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left.parent = root;
        } else if (newNode.value > root.value) {
            root.right = this.insertNode(root.right, newNode);
            root.right.parent = root;
        }

        return root;
    }

    public inorderTraversal(): number[] {
        const result: number[] = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    private inOrderHelper(node: Node | null, result: number[]): void {
        if (node !== null) {
            this.inOrderHelper(node.left, result);
            result.push(node.value);
            this.inOrderHelper(node.right, result);
        }
    }
}

// Example Usage
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
console.log(rbt.inorderTraversal()); // Output: [10, 20, 30]
