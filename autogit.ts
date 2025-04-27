class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    leaf: boolean;

    constructor(leaf: boolean) {
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree<T> {
    root: BTreeNode<T> | null;
    t: number;  // Minimum degree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Search for a key
    search(key: T, node: BTreeNode<T> | null = this.root): BTreeNode<T> | null {
        if (node == null) return null;

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return node; // found the key
        } else if (node.leaf) {
            return null; // key not found
        } else {
            return this.search(key, node.children[i]);
        }
    }

    // Insert a key
    insert(key: T): void {
        if (this.root == null) {
            this.root = new BTreeNode(true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                const newRoot = new BTreeNode(false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

    private insertNonFull(node: BTreeNode<T>, key: T): void {
        let i = node.keys.length - 1;
        if (node.leaf) {
            // Insert key in node
            node.keys.push(key);
            node.keys.sort(); // For simplicity, but for efficiency maintain sorted insert
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    private splitChild(parent: BTreeNode<T>, i: number): void {
        const node = parent.children[i];
        const newNode = new BTreeNode(node.leaf);
        const t = this.t;

        // Move half of the keys to new node
        newNode.keys = node.keys.splice(t, t - 1);
        if (!node.leaf) {
            newNode.children = node.children.splice(t, t);
        }

        parent.keys.splice(i, 0, node.keys.pop()!);
        parent.children.splice(i + 1, 0, newNode);
    }
}
