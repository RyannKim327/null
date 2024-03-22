class BTreeNode {
    constructor(t, leaf) {
        this.t = t; // Min degree
        this.keys = [];
        this.children = leaf ? null : [];
        this.isLeaf = leaf;
    }
}

class BTree {
    constructor(t) {
        this.root = null;
        this.t = t;
    }

    // Insert a key into the tree
    insert(key) {
        if (this.root === null) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                let newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

    // Insert a key into a non-full node
    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        if (node.isLeaf) {
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
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    // Split child of a node
    splitChild(node, i) {
        let t = this.t;
        let y = node.children[i];
        let z = new BTreeNode(t, y.isLeaf);
        node.children.splice(i + 1, 0, z);
        node.keys.splice(i, 0, y.keys[t - 1]);

        z.keys = y.keys.splice(t, t - 1);

        if (!y.isLeaf) {
            z.children = y.children.splice(t, t);
        }
    }
}

// Usage
const btree = new BTree(3); // Create a B-tree with min degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
