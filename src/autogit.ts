class BTreeNode {
    keys: number[];       // Array to store keys
    children: BTreeNode[]; // Array to store child pointers
    isLeaf: boolean;      // Indicates if the node is a leaf
    t: number;            // Minimum degree (defines the capacity)

    constructor(t: number, isLeaf: boolean) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
        this.t = t;
    }

    // Utility to find the index where a key should be inserted or searched
    findKeyIndex(key: number): number {
        let idx = 0;
        while (idx < this.keys.length && this.keys[idx] < key) {
            idx++;
        }
        return idx;
    }
}
class BTree {
    root: BTreeNode | null; // Root of the B-tree
    t: number;              // Minimum degree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Search for a key in the B-tree
    search(key: number): boolean {
        if (!this.root) return false;
        return this._search(this.root, key);
    }

    private _search(node: BTreeNode, key: number): boolean {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        // If the key is found in the current node
        if (i < node.keys.length && key === node.keys[i]) {
            return true;
        }

        // If the node is a leaf and the key is not found
        if (node.isLeaf) {
            return false;
        }

        // Otherwise, search in the appropriate child
        return this._search(node.children[i], key);
    }

    // Insert a key into the B-tree
    insert(key: number): void {
        if (!this.root) {
            // Create a new root if the tree is empty
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            // If the root is full, split it and create a new root
            if (this.root.keys.length === 2 * this.t - 1) {
                const newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            // Insert the key into the leaf node
            node.keys.push(0); // Placeholder for shifting
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            // Find the child where the key should be inserted
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            // If the child is full, split it
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    private splitChild(parent: BTreeNode, index: number): void {
        const t = this.t;
        const child = parent.children[index];
        const newChild = new BTreeNode(t, child.isLeaf);

        // Move the last (t-1) keys from the child to the new child
        newChild.keys = child.keys.splice(t, t - 1);

        // If the child is not a leaf, move the last t children as well
        if (!child.isLeaf) {
            newChild.children = child.children.splice(t, t);
        }

        // Insert the middle key into the parent
        parent.keys.splice(index, 0, child.keys.pop()!);
        parent.children.splice(index + 1, 0, newChild);
    }

    // Delete a key from the B-tree (not implemented here for brevity)
    delete(key: number): void {
        throw new Error("Deletion is not implemented yet.");
    }
}
const btree = new BTree(3); // Create a B-tree with minimum degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log(btree.search(10)); // true
console.log(btree.search(15)); // false
