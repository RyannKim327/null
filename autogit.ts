enum Color {
    RED,
    BLACK
}

class RBNode<T> {
    value: T;
    color: Color;
    left: RBNode<T> | null = null;
    right: RBNode<T> | null = null;
    parent: RBNode<T> | null = null;

    constructor(value: T, color: Color = Color.RED) {
        this.value = value;
        this.color = color;
    }
}
class RedBlackTree<T> {
    private root: RBNode<T> | null = null;

    // Public method to insert a value
    insert(value: T): void {
        const newNode = new RBNode(value);
        this.root = this.insertNode(this.root, newNode);
        this.fixInsert(newNode);
    }

    // Placeholder for actual binary search tree insert
    private insertNode(root: RBNode<T> | null, newNode: RBNode<T>): RBNode<T> {
        if (root === null) {
            return newNode;
        }
        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left.parent = root;
        } else {
            root.right = this.insertNode(root.right, newNode);
            root.right.parent = root;
        }
        return root;
    }

    // Fix red-black tree properties after insertion
    private fixInsert(node: RBNode<T>): void {
        // Implementation will go here
    }

    // Rotations (leftRotate and rightRotate) will go here
}
private leftRotate(x: RBNode<T>): void {
    const y = x.right!;
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

private rightRotate(y: RBNode<T>): void {
    const x = y.left!;
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
private fixInsert(k: RBNode<T>): void {
    let node = k;

    while (node !== this.root && node.parent?.color === Color.RED) {
        const parent = node.parent;
        const grandparent = parent.parent;

        if (parent === grandparent?.left) {
            const uncle = grandparent.right;
            if (uncle?.color === Color.RED) {
                // Case 1: uncle red -> recolor
                parent.color = Color.BLACK;
                uncle.color = Color.BLACK;
                grandparent.color = Color.RED;
                node = grandparent;
            } else {
                if (node === parent.right) {
                    // Case 2: node is right child -> left rotate parent
                    node = parent;
                    this.leftRotate(node);
                }
                // Case 3: node is left child -> right rotate grandparent
                parent.color = Color.BLACK;
                if (grandparent) {
                    grandparent.color = Color.RED;
                    this.rightRotate(grandparent);
                }
            }
        } else {
            // Mirror case: parent is right child of grandparent
            const uncle = grandparent?.left;
            if (uncle?.color === Color.RED) {
                parent.color = Color.BLACK;
                uncle.color = Color.BLACK;
                if (grandparent) grandparent.color = Color.RED;
                node = grandparent!;
            } else {
                if (node === parent.left) {
                    node = parent;
                    this.rightRotate(node);
                }
                parent.color = Color.BLACK;
                if (grandparent) {
                    grandparent.color = Color.RED;
                    this.leftRotate(grandparent);
                }
            }
        }
    }
    this.root!.color = Color.BLACK;
}
inOrderTraversal(node: RBNode<T> | null = this.root, result: T[] = []): T[] {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
}
const tree = new RedBlackTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);
console.log(tree.inOrderTraversal());  // [10, 15, 20, 25, 30]
