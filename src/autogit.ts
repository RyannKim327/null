enum Color {
    RED = "RED",
    BLACK = "BLACK",
}

class RedBlackTreeNode<T> {
    value: T;
    color: Color;
    left: RedBlackTreeNode<T> | null;
    right: RedBlackTreeNode<T> | null;
    parent: RedBlackTreeNode<T> | null;

    constructor(value: T, color: Color = Color.RED) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class RedBlackTree<T> {
    root: RedBlackTreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    insert(value: T): void {
        const newNode = new RedBlackTreeNode(value);

        if (!this.root) {
            this.root = newNode;
            this.root.color = Color.BLACK; // Root must always be black
            return;
        }

        let current = this.root;
        let parent: RedBlackTreeNode<T> | null = null;

        // Find the correct position for the new node
        while (current) {
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                // Duplicate values are not allowed
                return;
            }
        }

        // Attach the new node to the parent
        newNode.parent = parent;
        if (value < parent!.value) {
            parent!.left = newNode;
        } else {
            parent!.right = newNode;
        }

        // Fix any violations of the Red-Black Tree properties
        this.fixInsert(newNode);
    }

    // Fix the tree after insertion
    private fixInsert(node: RedBlackTreeNode<T>): void {
        while (node.parent && node.parent.color === Color.RED) {
            const parent = node.parent;
            const grandParent = parent.parent;

            if (!grandParent) break; // If there's no grandparent, we're done

            if (parent === grandParent.left) {
                const uncle = grandParent.right;

                // Case 1: Uncle is red
                if (uncle && uncle.color === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent; // Move up to grandparent
                } else {
                    // Case 2: Node is a right child
                    if (node === parent.right) {
                        node = parent;
                        this.rotateLeft(node);
                    }

                    // Case 3: Node is a left child
                    node.parent!.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    this.rotateRight(node.parent!.parent!);
                }
            } else {
                // Mirror cases for when the parent is the right child
                const uncle = grandParent.left;

                if (uncle && uncle.color === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent;
                } else {
                    if (node === parent.left) {
                        node = parent;
                        this.rotateRight(node);
                    }

                    node.parent!.color = Color.BLACK;
                    node.parent!.parent!.color = Color.RED;
                    this.rotateLeft(node.parent!.parent!);
                }
            }
        }

        this.root!.color = Color.BLACK; // Ensure the root is black
    }

    // Left rotation
    private rotateLeft(node: RedBlackTreeNode<T>): void {
        const rightChild = node.right!;
        node.right = rightChild.left;

        if (rightChild.left) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    // Right rotation
    private rotateRight(node: RedBlackTreeNode<T>): void {
        const leftChild = node.left!;
        node.left = leftChild.right;

        if (leftChild.right) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (!node.parent) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    // In-order traversal (for debugging purposes)
    inOrderTraversal(node: RedBlackTreeNode<T> | null = this.root): T[] {
        if (!node) return [];
        return [
            ...this.inOrderTraversal(node.left),
            node.value,
            ...this.inOrderTraversal(node.right),
        ];
    }
}
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.insert(25);

console.log(rbTree.inOrderTraversal()); // Outputs sorted values: [10, 15, 20, 25, 30]
