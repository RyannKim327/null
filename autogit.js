// Node class for the B-tree
class Node {
    constructor(t, leaf) {
        this.t = t;
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

// B-tree class
class BTree {
    constructor(t) {
        this.root = new Node(t, true);
        this.t = t;
    }

    // Function to insert a key into the B-tree
    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.t) - 1) {
            let newNode = new Node(this.t, false);
            newNode.children.push(root);
            this.splitChild(newNode, 0);
            this.root = newNode;
            this.insertNonFull(newNode, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    // Function to insert key into a non-full node
    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        if (node.leaf) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            let j = 0;
            while (j < node.keys.length && key > node.keys[j]) {
                j++;
            }
            if (node.children[j].keys.length === (2 * this.t) - 1) {
                this.splitChild(node, j);
                if (key > node.keys[j]) {
                    j++;
                }
            }
            this.insertNonFull(node.children[j], key);
        }
    }

    // Function to split child node
    splitChild(parent, i) {
        let t = this.t;
        let newNode = new Node(t, false);
        let node = parent.children[i];
        parent.children.splice(i, 0, newNode);
        
        for (let j = 0; j < t - 1; j++) {
            newNode.keys[j] = node.keys[j + t];
        }

        if (!node.leaf) {
            for (let j = 0; j < t; j++) {
                newNode.children[j] = node.children[j + t];
            }
        }

        for (let j = parent.keys.length; j >= i; j--) {
            parent.keys[j] = parent.keys[j - 1];
        }
        parent.keys[i] = node.keys[t - 1];
        node.keys.length = t - 1;
        node.children = node.children.slice(0, t);
    }
}

// Example of using the B-tree
const btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);

console.log(btree);
