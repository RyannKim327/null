class Node {
    constructor(t, isLeaf) {
        this.t = t;
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

    splitChild(parent, i) {
        let t = this.t;
        let child = parent.children[i];
        let newChild = new Node(t, child.isLeaf);

        parent.keys.splice(i, 0, child.keys[t - 1]);
        parent.children.splice(i + 1, 0, newChild);

        newChild.keys = child.keys.splice(t);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(t);
        }
    }
}

// Usage
let bTree = new BTree(3); // Create a B-tree with degree 3
bTree.insert(5);
bTree.insert(10);
bTree.insert(3);
