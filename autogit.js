class BTreeNode {
    constructor(t, leaf = true) {
        this.t = t; // Minimum degree
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree {
    constructor(t) {
        this.t = t;
        this.root = new BTreeNode(t, true);
    }

    insert(key) {
        let root = this.root;
        if (root.keys.length === 2 * this.t - 1) {
            let newNode = new BTreeNode(this.t, false);
            newNode.children.push(root);
            this.splitChild(newNode, 0);
            this.root = newNode;
            this.insertNonFull(newNode, key);
        } else {
            this.insertNonFull(root, key);
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
            if (node.children[i].keys.length === 2 * this.t - 1) {
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
        let newNode = new BTreeNode(t, child.leaf);
        parent.keys.splice(index, 0, child.keys[t - 1]);
        parent.children.splice(index + 1, 0, newNode);
        newNode.keys = child.keys.splice(t, t - 1);
        if (!child.leaf) {
            newNode.children = child.children.splice(t, t);
        }
    }

    search(key, node = this.root) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (node.keys[i] === key) {
            return true;
        }
        if (node.leaf) {
            return false;
        }
        return this.search(key, node.children[i]);
    }
}
