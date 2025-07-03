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
    private root: TreeNode<T> | null = null;

    // Insert a new value into the BST
    insert(value: T): void {
        this.root = this._insert(this.root, value);
    }

    private _insert(node: TreeNode<T> | null, value: T): TreeNode<T> {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            // Duplicate values are not inserted in this implementation
        }
        return node;
    }

    // Search for a value in the BST
    search(value: T): boolean {
        return this._search(this.root, value);
    }

    private _search(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._search(node.left, value);
        } else {
            return this._search(node.right, value);
        }
    }

    // Optional: In-order traversal
    inOrderTraversal(callback: (value: T) => void): void {
        this._inOrderTraversal(this.root, callback);
    }

    private _inOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this._inOrderTraversal(node.left, callback);
            callback(node.value);
            this._inOrderTraversal(node.right, callback);
        }
    }
}
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.search(4)); // true
console.log(bst.search(10)); // false

bst.inOrderTraversal((value) => console.log(value));
// Output: 2 3 4 5 6 7 8
