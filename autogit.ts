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
        this.color = Color.RED; // New nodes are always red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    private root: Node | null = null;

    private rotateLeft(node: Node) {
        const rightChild = node.right!;
        node.right = rightChild.left;

        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild; // Updating root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: Node) {
        const leftChild = node.left!;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild; // Updating root
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    private fixViolation(newNode: Node) {
        let parent: Node | null = null;
        let grandparent: Node | null = null;

        while (newNode !== this.root && newNode.color === Color.RED && newNode.parent?.color === Color.RED) {
            parent = newNode.parent;
            grandparent = parent.parent;

            // If parent is a left child of grandparent
            if (parent === grandparent?.left) {
                const uncle = grandparent.right;

                if (uncle?.color === Color.RED) { 
                    // Case 1: uncle is red
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent;
                } else {
                    // Case 2 or 3: uncle is black
                    if (newNode === parent.right) {
                        // Case 2: newNode is a right child
                        this.rotateLeft(parent);
                        newNode = parent;
                        parent = newNode.parent;
                    }

                    // Case 3: newNode is a left child
                    this.rotateRight(grandparent);
                    const tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    newNode = parent;
                }
            } else { // If parent is a right child of grandparent
                const uncle = grandparent.left;

                if (uncle?.color === Color.RED) {
                    // Case 1: uncle is red
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    newNode = grandparent;
                } else {
                    // Case 2 or 3: uncle is black
                    if (newNode === parent.left) {
                        // Case 2: newNode is a left child
                        this.rotateRight(parent);
                        newNode = parent;
                        parent = newNode.parent;
                    }

                    // Case 3: newNode is a right child
                    this.rotateLeft(grandparent);
                    const tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    newNode = parent;
                }
            }
        }

        this.root.color = Color.BLACK; // Ensure the root is always black
    }

    public insert(value: number) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root must be black
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

    public inorderTraversal(): number[] {
        const result: number[] = [];
        this.inorderHelper(this.root, result);
        return result;
    }

    private inorderHelper(node: Node | null, result: number[]) {
        if (node !== null) {
            this.inorderHelper(node.left, result);
            result.push(node.value);
            this.inorderHelper(node.right, result);
        }
    }
}

// Example usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(15);

console.log(rbTree.inorderTraversal()); // Output: [10, 15, 20]
