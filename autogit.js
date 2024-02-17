class BTreeNode {
    constructor(t, leaf = true) {
        this.t = t;
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree {
    constructor(t) {
        this.root = new BTreeNode(t);
        this.t = t;
    }

    search(node, key) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (i < node.keys.length && key === node.keys[i]) {
            return node;
        }
        if (node.leaf) {
            return null;
        } else {
            return this.search(node.children[i], key);
        }
    }

    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.t) - 1) {
            let newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    splitChild(node, i) {
        let t = this.t;
        let child = node.children[i];
        let newChild = new BTreeNode(t, child.leaf);
        node.keys.splice(i, 0, child.keys[t - 1]);
        node.children.splice(i + 1, 0, newChild);
        newChild.keys = child.keys.splice(t);
        if (!child.leaf) {
            newChild.children = child.children.splice(t);
        }
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        if (node.leaf) {
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
            if (node.children[i].keys.length === (2 * this.t) - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }
}

// Usage
const btree = new BTree(2); // Create a B-tree with degree 2
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
console.log(btree.search(btree.root, 5)); // Output: BTreeNode { t: 2, keys: [ 5 ], children: [], leaf: true }
