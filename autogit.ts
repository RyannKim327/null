class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    constructor(private compare: (a: T, b: T) => number) {}

    insert(value: T): void {
        if (!this.root) {
            this.root = new TreeNode(value);
            return;
        }
        this._insert(this.root, value);
    }

    private _insert(node: TreeNode<T>, value: T): void {
        if (this.compare(value, node.value) < 0) {
            if (node.left) {
                this._insert(node.left, value);
            } else {
                node.left = new TreeNode(value);
            }
        } else {
            if (node.right) {
                this._insert(node.right, value);
            } else {
                node.right = new TreeNode(value);
            }
        }
    }

    search(value: T): TreeNode<T> | null {
        return this._search(this.root, value);
    }

    private _search(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (!node) return null;
        const cmp = this.compare(value, node.value);
        if (cmp === 0) return node;
        if (cmp < 0) return this._search(node.left, value);
        return this._search(node.right, value);
    }

    // Optional: Implement traversal methods like inOrder, preOrder, postOrder
    inOrder(callback: (node: TreeNode<T>) => void): void {
        this._inOrder(this.root, callback);
    }

    private _inOrder(node: TreeNode<T> | null, callback: (node: TreeNode<T>) => void): void {
        if (!node) return;
        this._inOrder(node.left, callback);
        callback(node);
        this._inOrder(node.right, callback);
    }
}
const bst = new BinarySearchTree<number>((a, b) => a - b);

bst.insert(5);
bst.insert(3);
bst.insert(7);

console.log(bst.search(3)); // should find the node
