class BTreeNode {
    constructor(t, isLeaf) {
        this.t = t;
        this.keys = [];
        this.children = isLeaf ? [] : new Array(2 * t);
        this.isLeaf = isLeaf;
    }
}

class BTree {
    constructor(t) {
        this.root = null;
        this.t = t;
    }

    insert(key) {
        if (this.root === null) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                let newRoot = new BTreeNode(this.t, false);
                newRoot.children[0] = this.root;
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

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

    search(key, node = this.root) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (node.keys[i] === key) {
            return node;
        }
        if (node.isLeaf) {
            return null;
        }
        return this.search(key, node.children[i]);
    }
}

const btree = new BTree(3);

btree.insert(1);
btree.insert(2);
btree.insert(3);
btree.insert(4);

console.log(btree.search(2)); // Output: BTreeNode { t: 3, keys: [ 2 ], children: [], isLeaf: true }
