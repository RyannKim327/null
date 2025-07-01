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

    // Insert a value into the BST
    insert(value: number): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in the BST
    search(value: number): boolean {
        let current = this.root;

        while (current !== null) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node !== null) {
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
bst.insert(12);
bst.insert(18);

// Search for values
console.log(bst.search(7));  // Output: true
console.log(bst.search(20)); // Output: false

// Perform traversals
console.log("In-order traversal:", bst.inOrderTraversal(bst.root));   // Output: [3, 5, 7, 10, 12, 15, 18]
console.log("Pre-order traversal:", bst.preOrderTraversal(bst.root)); // Output: [10, 5, 3, 7, 15, 12, 18]
console.log("Post-order traversal:", bst.postOrderTraversal(bst.root)); // Output: [3, 7, 5, 12, 18, 15, 10]
