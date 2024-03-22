class Node {
    constructor(t, leaf) {
        this.t = t; // Minimum degree (defines the range for number of keys)
        this.keys = []; // An array of keys
        this.children = []; // An array of child pointers
        this.leaf = leaf; // Is true when node is a leaf, false when it is an internal node
    }
}

class BTree {
    constructor(t) {
        this.root = null; // Pointer to the root node
        this.t = t; // Minimum degree (defines the range for number of keys)
    }

    search(key, node = this.root) {
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
            return this.search(key, node.children[i]);
        }
    }

    insert(key) {
        if (this.root === null) {
            this.root = new Node(this.t, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                let newNode = new Node(this.t, false);
                newNode.children[0] = this.root;
                this.splitChild(newNode, 0);
                let i = 0;
                if (newNode.keys[0] < key) i++;
                this.insertNonFull(newNode.children[i], key);
                this.root = newNode;
            } else {
                this.insertNonFull(this.root, key);
            }
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

    splitChild(parent, i) {
        let t = this.t;
        let child = parent.children[i];
        let newNode = new Node(t, child.leaf);
        parent.keys.splice(i, 0, child.keys[t - 1]);
        parent.children.splice(i + 1, 0, newNode);
        newNode.keys = child.keys.splice(t);
        if (!child.leaf) {
            newNode.children = child.children.splice(t);
        }
    }
}

// Usage
let bTree = new BTree(3);
bTree.insert(1);
bTree.insert(3);
bTree.insert(7);
bTree.insert(10);
bTree.insert(14);
bTree.insert(19);
bTree.insert(24);
bTree.insert(28);
bTree.insert(30);
bTree.insert(38);
bTree.insert(40);
bTree.insert(7);
