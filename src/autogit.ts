class BTreeNode {
    keys: number[]; // Array to store keys
    children: (BTreeNode | null)[]; // Array to store child pointers
    isLeaf: boolean; // Indicates if the node is a leaf
    t: number; // Minimum degree of the B-tree

    constructor(t: number, isLeaf: boolean) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
        this.t = t;
    }

    // Helper method to find the index where a key should be inserted
    findKeyIndex(key: number): number {
        let idx = 0;
        while (idx < this.keys.length && this.keys[idx] < key) {
            idx++;
        }
        return idx;
    }
}
class BTree {
    root: BTreeNode | null;
    t: number; // Minimum degree of the B-tree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Search for a key in the B-tree
    search(key: number, node: BTreeNode | null = this.root): { found: boolean, node: BTreeNode | null } {
        if (!node) return { found: false, node: null };

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return { found: true, node };
        }

        if (node.isLeaf) {
            return { found: false, node: null };
        }

        return this.search(key, node.children[i]);
    }

    // Split a full child node
    splitChild(parent: BTreeNode, index: number): void {
        const t = this.t;
        const child = parent.children[index] as BTreeNode;

        // Create a new node to store the right half of the child's keys
        const newNode = new BTreeNode(t, child.isLeaf);
        newNode.keys = child.keys.splice(t, t - 1);

        if (!child.isLeaf) {
            newNode.children = child.children.splice(t, t);
        }

        // Insert the middle key into the parent
        parent.keys.splice(index, 0, child.keys.pop() as number);
        parent.children.splice(index + 1, 0, newNode);
    }

    // Insert a key into the B-tree
    insert(key: number): void {
        if (!this.root) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
            return;
        }

        let root = this.root;
        if (root.keys.length === 2 * this.t - 1) {
            const newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            root = newRoot;
        }

        this.insertNonFull(root, key);
    }

    // Insert a key into a non-full node
    insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            node.keys.push(0); // Placeholder for insertion
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            const child = node.children[i];
            if ((child as BTreeNode).keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i] as BTreeNode, key);
        }
    }

    // Delete a key from the B-tree (Optional)
    delete(key: number): void {
        console.log("Deletion not implemented yet.");
    }
}
const btree = new BTree(3); // Create a B-tree with minimum degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log(btree.search(6));  // { found: true, node: ... }
console.log(btree.search(15)); // { found: false, node: null }
