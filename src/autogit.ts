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

    // Insert a new value into the binary tree
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

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(node.value);
            result.push(...this.preOrderTraversal(node.left));
            result.push(...this.preOrderTraversal(node.right));
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(...this.postOrderTraversal(node.left));
            result.push(...this.postOrderTraversal(node.right));
            result.push(node.value);
        }
        return result;
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
console.log("In-order traversal:", tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log("Post-order traversal:", tree.postOrderTraversal()); // [3, 7, 5, 15, 10]
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

    inOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }

    preOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(node.value);
            result.push(...this.preOrderTraversal(node.left));
            result.push(...this.preOrderTraversal(node.right));
        }
        return result;
    }

    postOrderTraversal(node: TreeNode<T> | null = this.root): T[] {
        const result: T[] = [];
        if (node !== null) {
            result.push(...this.postOrderTraversal(node.left));
            result.push(...this.postOrderTraversal(node.right));
            result.push(node.value);
        }
        return result;
    }
}
