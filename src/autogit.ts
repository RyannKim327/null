// Define the structure of a binary tree node
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

// Define the binary tree class
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null; // The tree starts with no nodes
    }

    // Insert a new value into the binary tree
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        // Traverse the tree to find the correct position for the new node
        let current = this.root;
        while (true) {
            if (value < current.value) {
                // Go to the left subtree
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                // Go to the right subtree
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // In-order traversal: Left -> Root -> Right
    inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            this.inOrderTraversal(node.left, result); // Traverse left subtree
            result.push(node.value); // Visit the root
            this.inOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Pre-order traversal: Root -> Left -> Right
    preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            result.push(node.value); // Visit the root
            this.preOrderTraversal(node.left, result); // Traverse left subtree
            this.preOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Post-order traversal: Left -> Right -> Root
    postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node) {
            this.postOrderTraversal(node.left, result); // Traverse left subtree
            this.postOrderTraversal(node.right, result); // Traverse right subtree
            result.push(node.value); // Visit the root
        }
        return result;
    }

    // Search for a value in the binary tree
    search(value: T): boolean {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true; // Found the value
            } else if (value < current.value) {
                current = current.left; // Search in the left subtree
            } else {
                current = current.right; // Search in the right subtree
            }
        }
        return false; // Value not found
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
console.log("In-order traversal:", tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log("Post-order traversal:", tree.postOrderTraversal()); // [3, 7, 5, 15, 10]

// Search for values
console.log("Search for 7:", tree.search(7)); // true
console.log("Search for 20:", tree.search(20)); // false
