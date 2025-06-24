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
class BinarySearchTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode; // If the tree is empty, set the new node as the root
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode; // Insert as the left child
                    break;
                }
                currentNode = currentNode.left; // Move to the left child
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode; // Insert as the right child
                    break;
                }
                currentNode = currentNode.right; // Move to the right child
            }
        }
    }

    // Search for a value in the BST
    search(value: T): boolean {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true; // Value found
            } else if (value < currentNode.value) {
                currentNode = currentNode.left; // Move to the left child
            } else {
                currentNode = currentNode.right; // Move to the right child
            }
        }

        return false; // Value not found
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (!node) return result;

        this.inOrderTraversal(node.left, result); // Traverse the left subtree
        result.push(node.value); // Visit the current node
        this.inOrderTraversal(node.right, result); // Traverse the right subtree

        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (!node) return result;

        result.push(node.value); // Visit the current node
        this.preOrderTraversal(node.left, result); // Traverse the left subtree
        this.preOrderTraversal(node.right, result); // Traverse the right subtree

        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (!node) return result;

        this.postOrderTraversal(node.left, result); // Traverse the left subtree
        this.postOrderTraversal(node.right, result); // Traverse the right subtree
        result.push(node.value); // Visit the current node

        return result;
    }

    // Get the minimum value in the BST
    findMin(): T | null {
        if (!this.root) return null;

        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    // Get the maximum value in the BST
    findMax(): T | null {
        if (!this.root) return null;

        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }
}
const bst = new BinarySearchTree<number>();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for values
console.log(bst.search(7)); // Output: true
console.log(bst.search(20)); // Output: false

// Find min and max
console.log(bst.findMin()); // Output: 3
console.log(bst.findMax()); // Output: 15

// Traversal
console.log("In-order:", bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log("Pre-order:", bst.preOrderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log("Post-order:", bst.postOrderTraversal()); // Output: [3, 7, 5, 15, 10]
