class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class BinarySearchTree<T> {
    root: TreeNode<T> | null = null;

    // Insert a new value into the BST
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
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in the BST
    search(value: T): boolean {
        let current = this.root;
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

    // In-order traversal: Left, Node, Right
    inorderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
}
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(9);
bst.insert(11);

console.log(bst.search(13));  // true
console.log(bst.search(7));   // false
console.log(bst.inorderTraversal()); // [5, 9, 10, 11, 13]
