class BTreeNode {
    constructor(order, leaf = true) {
        this.order = order;
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree {
    constructor(order) {
        this.root = new BTreeNode(order, true);
        this.order = order;
    }

    // Insert a key into the tree
    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.order) - 1) {
            let newRoot = new BTreeNode(this.order, false);
            newRoot.children.push(root);
            this._splitChild(newRoot, 0);
            this.root = newRoot;
            this._insertNonFull(newRoot, key);
        } else {
            this._insertNonFull(root, key);
        }
    }

    _splitChild(parent, index) {
        let order = this.order;
        let nodeToSplit = parent.children[index];
        let newChild = new BTreeNode(order, nodeToSplit.leaf);
        parent.keys.splice(index, 0, nodeToSplit.keys[order - 1]);
        parent.children.splice(index + 1, 0, newChild);

        newChild.keys = nodeToSplit.keys.splice(order);
        if (!nodeToSplit.leaf) {
            newChild.children = nodeToSplit.children.splice(order);
        }
    }

    _insertNonFull(node, key) {
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
                this._splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this._insertNonFull(node.children[i], key);
        }
    }

    // Search for a key in the tree
    search(key, node = this.root) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (i < node.keys.length && key === node.keys[i]) {
            return true;
        }
        if (node.leaf) {
            return false;
        } else {
            return this.search(key, node.children[i]);
        }
    }
}

// Example usage
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);

console.log(bTree.search(10)); // Output: true
console.log(bTree.search(15)); // Output: false
