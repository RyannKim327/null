class BTreeNode {
    constructor(t, leaf) {
        this.t = t; // Minimum degree
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree {
    constructor(t) {
        this.root = null;
        this.t = t; // Minimum degree
    }

    // Insert a key into the B-tree
    insert(key) {
        if (!this.root) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            let currentNode = this.root;

            if (currentNode.keys.length === (2 * this.t) - 1) { // Check if root is full
                let newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
                this.insertNonFull(newRoot, key);
            } else {
                this.insertNonFull(currentNode, key);
            }
        }
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;

        if (node.leaf) {
            node.keys.push(''); // Add a temporary key to make space for the new key
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

    splitChild(parent, index) {
        let t = this.t;
        let child = parent.children[index];
        let newChild = new BTreeNode(t, child.leaf);
        parent.keys.splice(index, 0, child.keys[t - 1]);
        parent.children.splice(index + 1, 0, newChild);

        newChild.keys = child.keys.splice(t, t - 1);
        if (!child.leaf) {
            newChild.children = child.children.splice(t, t);
        }
    }

    // Search for a key in the B-tree
    search(key, node = this.root) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (node.keys[i] === key) {
            return node;
        }

        if (node.leaf) {
            return null;
        }

        return this.search(key, node.children[i]);
    }
}
