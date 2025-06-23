class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null; // Initially, the tree is empty
    }

    // Insert a new value into the tree
    insert(value: number): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Go to the left subtree
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                // Go to the right subtree
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Search for a value in the tree
    search(value: number): boolean {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true; // Value found
            } else if (value < currentNode.value) {
                currentNode = currentNode.left; // Search in the left subtree
            } else {
                currentNode = currentNode.right; // Search in the right subtree
            }
        }

        return false; // Value not found
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}
const bst = new BinarySearchTree();

// Insert values into the tree
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(20);

// Search for values in the tree
console.log(bst.search(7)); // Output: true
console.log(bst.search(12)); // Output: false

// Perform in-order traversal
console.log("In-order traversal:", bst.inOrderTraversal(bst.root));
// Output: [3, 5, 7, 10, 15, 20]

// Perform pre-order traversal
console.log("Pre-order traversal:", bst.preOrderTraversal(bst.root));
// Output: [10, 5, 3, 7, 15, 20]

// Perform post-order traversal
console.log("Post-order traversal:", bst.postOrderTraversal(bst.root));
// Output: [3, 7, 5, 20, 15, 10]
