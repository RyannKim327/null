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

    // Add a new value to the BST
    add(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node
    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Helper method to search for a node
    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        return true; // value is found
    }

    // In-order traversal of the BST
    inOrderTraversal(node: TreeNode | null = this.root): number[] {
        const result: number[] = [];
        if (node) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

console.log(bst.search(7)); // Output: true
console.log(bst.search(20)); // Output: false
console.log(bst.inOrderTraversal()); // Output: [5, 7, 10, 15]
