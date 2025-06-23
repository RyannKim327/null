class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null; // The tree starts with no nodes
    }

    // Insert a value into the binary tree
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        // Use a helper function to find the correct position for the new node
        const insertNode = (node: TreeNode<T>, newNode: TreeNode<T>): void => {
            if (newNode.value < node.value) {
                // Insert into the left subtree
                if (!node.left) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                // Insert into the right subtree
                if (!node.right) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            this.inOrderTraversal(node.left, result); // Traverse left subtree
            result.push(node.value); // Visit the current node
            this.inOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            result.push(node.value); // Visit the current node
            this.preOrderTraversal(node.left, result); // Traverse left subtree
            this.preOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            this.postOrderTraversal(node.left, result); // Traverse left subtree
            this.postOrderTraversal(node.right, result); // Traverse right subtree
            result.push(node.value); // Visit the current node
        }
        return result;
    }
}
const tree = new BinaryTree<number>();

// Insert values into the tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// Perform traversals
console.log("In-order Traversal:", tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log("Pre-order Traversal:", tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log("Post-order Traversal:", tree.postOrderTraversal()); // [3, 7, 5, 15, 10]
search(value: T): boolean {
    const searchNode = (node: TreeNode<T> | null): boolean => {
        if (!node) return false;
        if (value === node.value) return true;
        return value < node.value
            ? searchNode(node.left)
            : searchNode(node.right);
    };
    return searchNode(this.root);
}
