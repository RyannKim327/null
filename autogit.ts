class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    leaf: boolean;
    t: number;

    constructor(t: number, leaf: boolean) {
        this.t = t; // Minimum degree
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }

    insertNonFull(key: number) {
        let i = this.keys.length - 1;

        if (this.leaf) {
            // Locate the position of new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key);
        } else {
            // Locate the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++;
            if (this.children[i].keys.length === (2 * this.t - 1)) {
                this.splitChild(i);
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    splitChild(i: number) {
        const y = this.children[i];
        const z = new BTreeNode(y.t, y.leaf);

        // Move the last t - 1 keys of y to z
        for (let j = 0; j < this.t - 1; j++) {
            z.keys.push(y.keys.pop()!);
        }

        // If not leaf, move the last t children of y to z
        if (!y.leaf) {
            for (let j = 0; j < this.t; j++) {
                z.children.push(y.children.pop()!);
            }
        }

        // Insert the new child into this node
        this.children.splice(i + 1, 0, z);
        this.keys.splice(i, 0, y.keys.pop()!);
    }
}

class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    insert(key: number) {
        if (this.root.keys.length === 2 * this.t - 1) {
            // Root node is full, need to split
            const s = new BTreeNode(this.t, false);
            s.children.push(this.root);
            s.splitChild(0);
            const i = 0;

            if (s.keys[0] < key) {
                s.children[i + 1].insertNonFull(key);
            } else {
                s.children[i].insertNonFull(key);
            }
            this.root = s; // Update root
        } else {
            this.root.insertNonFull(key);
        }
    }

    // For testing purposes: print tree
    traverse(node: BTreeNode | null = this.root) {
        if (node) {
            let i;
            for (i = 0; i < node.keys.length; i++) {
                if (!node.leaf) {
                    this.traverse(node.children[i]);
                }
                console.log(node.keys[i]);
            }
            if (!node.leaf) {
                this.traverse(node.children[i]);
            }
        }
    }
}

// Example usage
const bTree = new BTree(2); // A B-tree with minimum degree t = 2
const keys = [10, 20, 5, 6, 12, 30, 7, 17];

for (const key of keys) {
    bTree.insert(key);
}

console.log("Traversal of B-tree:");
bTree.traverse(); // Print all keys in sorted order
