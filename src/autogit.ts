enum Color {
    Red = "RED",
    Black = "BLACK"
}

class RBTreeNode<T> {
    key: T;
    color: Color;
    left: RBTreeNode<T> | null;
    right: RBTreeNode<T> | null;
    parent: RBTreeNode<T> | null;

    constructor(key: T, color: Color = Color.Red) {
        this.key = key;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class RedBlackTree<T> {
    private root: RBTreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a new key into the tree
    insert(key: T): void {
        const newNode = new RBTreeNode(key);

        if (!this.root) {
            this.root = newNode;
            this.root.color = Color.Black; // Root must always be black
            return;
        }

        let current = this.root;
        let parent: RBTreeNode<T> | null = null;

        // Find the correct position for the new node
        while (current) {
            parent = current;
            if (key < current.key) {
                current = current.left;
            } else if (key > current.key) {
                current = current.right;
            } else {
                // Duplicate keys are not allowed
                return;
            }
        }

        // Insert the new node
        newNode.parent = parent;
        if (key < parent!.key) {
            parent!.left = newNode;
        } else {
            parent!.right = newNode;
        }

        // Fix any violations of the Red-Black Tree properties
        this.fixInsert(newNode);
    }

    // Balance the tree after insertion
    private fixInsert(node: RBTreeNode<T>): void {
        while (node.parent && node.parent.color === Color.Red) {
            const parent = node.parent;
            const grandparent = parent.parent;

            if (!grandparent) break; // If there's no grandparent, we're done

            // Case 1: Parent is the left child of the grandparent
            if (parent === grandparent.left) {
                const uncle = grandparent.right;

                // Case 1.1: Uncle is red (recoloring)
                if (uncle && uncle.color === Color.Red) {
                    grandparent.color = Color.Red;
                    parent.color = Color.Black;
                    uncle.color = Color.Black;
                    node = grandparent;
                } else {
                    // Case 1.2: Node is the right child (left-right case)
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent!;
                    }

                    // Case 1.3: Node is the left child (left-left case)
                    this.rotateRight(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    node = parent;
                }
            } 
            // Case 2: Parent is the right child of the grandparent
            else {
                const uncle = grandparent.left;

                // Case 2.1: Uncle is red (recoloring)
                if (uncle && uncle.color === Color.Red) {
                    grandparent.color = Color.Red;
                    parent.color = Color.Black;
                    uncle.color = Color.Black;
                    node = grandparent;
                } else {
                    // Case 2.2: Node is the left child (right-left case)
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent!;
                    }

                    // Case 2.3: Node is the right child (right-right case)
                    this.rotateLeft(grandparent);
                    [parent.color, grandparent.color] = [grandparent.color, parent.color];
                    node = parent;
                }
            }
        }

        // Ensure the root is always black
        if (this.root) {
            this.root.color = Color.Black;
        }
    }

    // Perform a left rotation
    private rotateLeft(node: RBTreeNode<T>): void {
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

    // Perform a right rotation
    private rotateRight(node: RBTreeNode<T>): void {
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

    // In-order traversal (for testing purposes)
    inOrderTraversal(node: RBTreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.key);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }
}
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
rbt.insert(15);
rbt.insert(25);

console.log(rbt.inOrderTraversal()); // Output: [10, 15, 20, 25, 30]
