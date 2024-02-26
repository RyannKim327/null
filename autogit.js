class Node {
    constructor(t, isLeaf) {
        this.t = t; // Minimum degree
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }
}

class BTree {
    constructor(t) {
        this.root = new Node(t, true);
        this.t = t;
    }

    // Search function for a key in the B-tree
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

    // Insert function for a key in the B-tree
    insert(key) {
        let root = this.root;

        if (root.keys.length === (2 * this.t) - 1) {
            let newRoot = new Node(this.t, false);
            newRoot.children.push(root);

            this.splitChild(newRoot, 0);

            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    splitChild(node, i) {
        let t = node.t;
        let child = node.children[i];
        let newChild = new Node(t, child.isLeaf);

        node.keys.splice(i, 0, child.keys[t - 1]);
        node.children.splice(i + 1, 0, newChild);

        newChild.keys = child.keys.splice(t, t - 1);
        newChild.children = child.children.splice(t, t);

        if (!child.isLeaf) {
            newChild.isLeaf = false;
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
