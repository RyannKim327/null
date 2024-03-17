class BTreeNode {
    constructor(t, isLeaf) {
        this.t = t; // Minimum degree (defines the range for number of keys)
        this.keys = []; // Array of keys
        this.children = []; // Array of child pointers
        this.isLeaf = isLeaf; // Is true when node is leaf
    }
}

class BTree {
    constructor(t) {
        this.root = null;
        this.t = t; // Minimum degree
    }

    // Function to traverse the tree
    traverse(node) {
        if (node) {
            let result = [];
            let i;
            for (i = 0; i < node.keys.length; i++) {
                if (!node.isLeaf) {
                    result = result.concat(this.traverse(node.children[i]));
                }
                result.push(node.keys[i]);
            }

            if (!node.isLeaf) {
                result = result.concat(this.traverse(node.children[i]));
            }
            return result;
        }
    }

    // Function to search a key in the tree
    search(node, key) {
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
        return this.search(node.children[i], key);
    }

    // Function to insert a new key in the tree
    insert(key) {
        if (!this.root) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            let root = this.root;
            if (root.keys.length === (2 * this.t) - 1) {
                let newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(root);
                this.splitChild(newRoot, 0); // Split the old root
                let i = 0;
                if (newRoot.keys[0] < key) {
                    i++;
                }
                this.insertNonFull(newRoot.children[i], key);
                this.root = newRoot;
            } else {
                this.insertNonFull(root, key);
            }
        }
    }

    // Function to split a child of the current node
    splitChild(parent, i) {
        let child = parent.children[i];
        let newChild = new BTreeNode(child.t, child.isLeaf);
        parent.children.splice(i + 1, 0, newChild);
        parent.keys.splice(i, 0, child.keys[child.keys.length / 2]);
        newChild.keys = child.keys.splice(child.keys.length / 2 + 1);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(child.children.length / 2 + 1);
        }
    }

    // Function to insert a key in a non-full node
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
