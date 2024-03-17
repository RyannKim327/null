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
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    search(key, node=this.root) {
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

    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.t) - 1) {
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
            if (node.children[i].keys.length === (2 * this.t) - 1) {
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
        let child = node.children[i];
        let newChild = new BTreeNode(t, child.leaf);

        node.children.splice(i + 1, 0, newChild);
        node.keys.splice(i, 0, child.keys[t - 1]);

        newChild.keys = child.keys.splice(t);
        if (!child.leaf) {
            newChild.children = child.children.splice(t);
        }
    }
}
