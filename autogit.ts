class TreeNode {
    public value: number;
    public left: TreeNode | null = null;
    public right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class BinarySearchTree {
    private root: TreeNode | null = null;

    // Insert a new value into the BST
    public insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertRec(this.root, newNode);
        }
    }

    // Helper method to insert a node in the correct position
    private insertRec(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertRec(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertRec(node.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    public search(value: number): boolean {
        return this.searchRec(this.root, value);
    }

    // Helper method to search recursively
    private searchRec(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchRec(node.left, value);
        } else {
            return this.searchRec(node.right, value);
        }
    }

    // In-order traversal of the BST
    public inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrderRec(this.root, result);
        return result;
    }

    // Helper method for in-order traversal
    private inOrderRec(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            this.inOrderRec(node.left, result);
            result.push(node.value);
            this.inOrderRec(node.right, result);
        }
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7)); // true
console.log(bst.search(8)); // false
console.log(bst.inOrderTraversal()); // [3, 5, 7, 10, 15]
