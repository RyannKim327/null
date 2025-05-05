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
class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a new value into the binary tree
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current: TreeNode | null = this.root;
        while (true) {
            if (value < current.value) {
                // Go to the left subtree
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                // Go to the right subtree
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in the binary tree
    search(value: number): boolean {
        let current: TreeNode | null = this.root;
        while (current !== null) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // In-order traversal of the tree
    inOrderTraversal(node: TreeNode | null = this.root): number[] {
        const result: number[] = [];
        if (node) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }

    // Pre-order traversal of the tree
    preOrderTraversal(node: TreeNode | null = this.root): number[] {
        const result: number[] = [];
        if (node) {
            result.push(node.value);
            result.push(...this.preOrderTraversal(node.left));
            result.push(...this.preOrderTraversal(node.right));
        }
        return result;
    }

    // Post-order traversal of the tree
    postOrderTraversal(node: TreeNode | null = this.root): number[] {
        const result: number[] = [];
        if (node) {
            result.push(...this.postOrderTraversal(node.left));
            result.push(...this.postOrderTraversal(node.right));
            result.push(node.value);
        }
        return result;
    }
}
const tree = new BinaryTree();

// Insert values into the tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// Search for values
console.log(tree.search(7));  // true
console.log(tree.search(20)); // false

// Traversals
console.log(tree.inOrderTraversal()); // [3, 5, 7, 10, 12, 15, 18]
console.log(tree.preOrderTraversal()); // [10, 5, 3, 7, 15, 12, 18]
console.log(tree.postOrderTraversal()); // [3, 7, 5, 12, 18, 15, 10]
