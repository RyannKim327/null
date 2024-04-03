class BTreeNode {
    constructor(t, leaf) {
        this.t = t;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(t) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.t) - 1) {
            let newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.insertNonFull(newRoot, key);
            this.root = newRoot;
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
}

// Example Usage
let bTree = new BTree(3);

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);

console.log(bTree.root);
