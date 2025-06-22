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
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value: T): void {
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

    // In-order traversal (left -> root -> right)
    inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (root -> left -> right)
    preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (left -> right -> root)
    postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // Search for a value in the binary tree
    search(value: T): boolean {
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
}
const tree = new BinaryTree<number>();

// Insert values into the binary tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// Perform traversals
console.log("In-order Traversal:", tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log("Pre-order Traversal:", tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log("Post-order Traversal:", tree.postOrderTraversal()); // [3, 7, 5, 15, 10]

// Search for a value
console.log("Search for 7:", tree.search(7)); // true
console.log("Search for 20:", tree.search(20)); // false
