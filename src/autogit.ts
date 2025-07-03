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
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.root = null;
        this.comparator = comparator;
    }

    // Insert a value into the BST
    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this._insertNode(this.root, newNode);
    }

    private _insertNode(current: TreeNode<T>, newNode: TreeNode<T>): void {
        if (this.comparator(newNode.value, current.value) < 0) {
            if (current.left === null) {
                current.left = newNode;
            } else {
                this._insertNode(current.left, newNode);
            }
        } else {
            if (current.right === null) {
                current.right = newNode;
            } else {
                this._insertNode(current.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    search(value: T): boolean {
        return this._searchNode(this.root, value);
    }

    private _searchNode(current: TreeNode<T> | null, value: T): boolean {
        if (current === null) {
            return false;
        }
        const comparison = this.comparator(value, current.value);
        if (comparison === 0) {
            return true;
        } else if (comparison < 0) {
            return this._searchNode(current.left, value);
        } else {
            return this._searchNode(current.right, value);
        }
    }

    // In-order traversal (optional)
    inorderTraversal(callback: (node: TreeNode<T>) => void): void {
        this._inorder(this.root, callback);
    }

    private _inorder(node: TreeNode<T> | null, callback: (node: TreeNode<T>) => void): void {
        if (node !== null) {
            this._inorder(node.left, callback);
            callback(node);
            this._inorder(node.right, callback);
        }
    }
}
// Comparator for numbers
const numberComparator = (a: number, b: number): number => a - b;

const bst = new BinarySearchTree<number>(numberComparator);

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

// Search for a value
console.log(bst.search(7));  // true
console.log(bst.search(3));  // false

// In-order traversal
bst.inorderTraversal(node => console.log(node.value)); 
// Output: 5, 7, 10, 15
