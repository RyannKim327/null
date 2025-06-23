class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a new value into the BST
    insert(value: number): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode; // If the tree is empty, set the new node as the root
            return;
        }

        let currentNode = this.root;

        while (true) {
            if (value < currentNode.data) {
                // Go to the left subtree
                if (!currentNode.left) {
                    currentNode.left = newNode; // Insert the new node here
                    break;
                }
                currentNode = currentNode.left;
            } else {
                // Go to the right subtree
                if (!currentNode.right) {
                    currentNode.right = newNode; // Insert the new node here
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Search for a value in the BST
    search(value: number): boolean {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.data) {
                return true; // Value found
            } else if (value < currentNode.data) {
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
            this.inOrderTraversal(node.left, result); // Traverse left subtree
            result.push(node.data); // Visit the root
            this.inOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            result.push(node.data); // Visit the root
            this.preOrderTraversal(node.left, result); // Traverse left subtree
            this.preOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            this.postOrderTraversal(node.left, result); // Traverse left subtree
            this.postOrderTraversal(node.right, result); // Traverse right subtree
            result.push(node.data); // Visit the root
        }
        return result;
    }
}
const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for values
console.log(bst.search(7)); // Output: true
console.log(bst.search(12)); // Output: false

// Perform traversals
console.log("In-order traversal:", bst.inOrderTraversal(bst.root)); // [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", bst.preOrderTraversal(bst.root)); // [10, 5, 3, 7, 15]
console.log("Post-order traversal:", bst.postOrderTraversal(bst.root)); // [3, 7, 5, 15, 10]
findMin(): number | null {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.data;
}
