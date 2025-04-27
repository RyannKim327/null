class AVLNode<T> {
    key: T;
    height: number;
    left: AVLNode<T> | null = null;
    right: AVLNode<T> | null = null;

    constructor(key: T) {
        this.key = key;
        this.height = 1; // new node is initially added at leaf
    }
}

class AVLTree<T> {
    private root: AVLNode<T> | null = null;

    // Utility: get height
    private height(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }

    // Utility: update height
    private updateHeight(node: AVLNode<T>) {
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    // Utility: get balance factor
    private getBalance(node: AVLNode<T>): number {
        return this.height(node.left) - this.height(node.right);
    }

    // Rotations
    private rotateRight(y: AVLNode<T>): AVLNode<T> {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    private rotateLeft(x: AVLNode<T>): AVLNode<T> {
        const y = x.right!;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Insert node
    public insert(key: T) {
        this.root = this._insert(this.root, key);
    }

    private _insert(node: AVLNode<T> | null, key: T): AVLNode<T> {
        if (node === null) {
            return new AVLNode(key);
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key);
        } else if (key > node.key) {
            node.right = this._insert(node.right, key);
        } else {
            // duplicate keys not allowed
            return node;
        }

        // Update height
        this.updateHeight(node);

        // Get balance factor
        const balance = this.getBalance(node);

        // Left Left
        if (balance > 1 && key < node.left!.key) {
            return this.rotateRight(node);
        }

        // Right Right
        if (balance < -1 && key > node.right!.key) {
            return this.rotateLeft(node);
        }

        // Left Right
        if (balance > 1 && key > node.left!.key) {
            node.left = this.rotateLeft(node.left!);
            return this.rotateRight(node);
        }

        // Right Left
        if (balance < -1 && key < node.right!.key) {
            node.right = this.rotateRight(node.right!);
            return this.rotateLeft(node);
        }

        return node;
    }

    // You could add delete, find, traverse methods next...
}
