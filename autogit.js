class BTreeNode {
    constructor(order, leaf) {
        this.order = order;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(order) {
        this.order = order;
        this.root = new BTreeNode(order, true);
    }

    insert(key) {
        let root = this.root;

        if (root.keys.length === (2 * this.order) - 1) {
            let newRoot = new BTreeNode(this.order, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
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
            if (node.children[i].keys.length === (2 * this.order) - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }

            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(parent, index) {
        let order = this.order;
        let child = parent.children[index];
        let newChild = new BTreeNode(order, child.leaf);
        parent.keys.splice(index, 0, child.keys[order - 1]);
        parent.children.splice(index + 1, 0, newChild);
        newChild.keys = child.keys.splice(order, order - 1);

        if (!child.leaf) {
            newChild.children = child.children.splice(order, order);
        }
    }
}
