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
            if (value < currentNode.value) {
                // Go left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                // Go right
                if (!currentNode.right) {
                    currentNode.right = newNode;
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
            if (value === currentNode.value) {
                return true; // Value found
            } else if (value < currentNode.value) {
                currentNode = currentNode.left; // Go left
            } else {
                currentNode = currentNode.right; // Go right
            }
        }

        return false; // Value not found
    }

    // Delete a value from the BST
    delete(value: number): boolean {
        const removeNode = (node: TreeNode | null, value: number): TreeNode | null => {
            if (!node) return null;

            if (value === node.value) {
                // Case 1: No children
                if (!node.left && !node.right) return null;

                // Case 2: One child
                if (!node.left) return node.right;
                if (!node.right) return node.left;

                // Case 3: Two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };

        const initialRoot = this.root;
        this.root = removeNode(this.root, value);
        return this.root !== initialRoot;
    }

    // In-order traversal (Left -> Root -> Right)
    inOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (Root -> Left -> Right)
    preOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (Left -> Right -> Root)
    postOrderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
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
console.log(bst.search(20)); // Output: false

// Perform traversals
console.log("In-order traversal:", bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", bst.preOrderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log("Post-order traversal:", bst.postOrderTraversal()); // Output: [3, 7, 5, 15, 10]

// Delete a value
bst.delete(5);
console.log("In-order traversal after deletion:", bst.inOrderTraversal()); // Output: [3, 7, 10, 15]
