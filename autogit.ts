class BTreeNode<T> {
    keys: T[];               // The keys within this node
    children: BTreeNode<T>[]; // Child pointers
    leaf: boolean;            // Is this node a leaf?

    constructor(leaf: boolean) {
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}
class BTree<T> {
    private root: BTreeNode<T> | null;
    private t: number; // Minimum degree

    constructor(t: number) {
        this.t = t;
        this.root = null;
    }

    // Search method
    search(key: T): { node: BTreeNode<T>, index: number } | null {
        if (!this.root) return null;
        return this._search(this.root, key);
    }

    private _search(node: BTreeNode<T>, key: T): { node: BTreeNode<T>, index: number } | null {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return { node, index: i };
        } else if (node.leaf) {
            return null;
        } else {
            return this._search(node.children[i], key);
        }
    }

    // Insert method: requires splitting nodes if full
    insert(key: T): void {
        if (!this.root) {
            this.root = new BTreeNode<T>(true);
            this.root.keys.push(key);
            return;
        }

        if (this.root.keys.length === 2 * this.t - 1) {
            const newRoot = new BTreeNode<T>(false);
            newRoot.children.push(this.root);
            this._splitChild(newRoot, 0);
            this.root = newRoot;
        }
        this._insertNonFull(this.root, key);
    }

    private _splitChild(parent: BTreeNode<T>, index: number): void {
        const node = parent.children[index];
        const newNode = new BTreeNode<T>(node.leaf);
        const t = this.t;

        // Push last t-1 keys from node to newNode
        newNode.keys = node.keys.splice(t);
        if (!node.leaf) {
            newNode.children = node.children.splice(t);
        }

        parent.keys.splice(index, 0, node.keys.pop()!);
        parent.children.splice(index + 1, 0, newNode);
    }

    private _insertNonFull(node: BTreeNode<T>, key: T): void {
        let i = node.keys.length - 1;

        if (node.leaf) {
            // Insert key into sorted position
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key);
        } else {
            // Move down the tree
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this._splitChild(node, i);
                if (key > node.keys[i]) i++;
            }
            this._insertNonFull(node.children[i], key);
        }
    }
}
