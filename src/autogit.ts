// Define the TreeNode class
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

// Define the BinarySearchTree class
class BinarySearchTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        // Otherwise, find the correct position for the new node
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Go left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                // Go right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
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
                currentNode = currentNode.left; // Search left subtree
            } else {
                currentNode = currentNode.right; // Search right subtree
            }
        }

        return false; // Value not found
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

// Example usage
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("In-order traversal:", bst.inOrderTraversal(bst.root)); // [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", bst.preOrderTraversal(bst.root)); // [10, 5, 3, 7, 15]
console.log("Post-order traversal:", bst.postOrderTraversal(bst.root)); // [3, 7, 5, 15, 10]

console.log("Search for 7:", bst.search(7)); // true
console.log("Search for 20:", bst.search(20)); // false
