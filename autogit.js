class BTreeNode {
    constructor(order, leaf) {
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

    insert(key) {
        let root = this.root;

        if (root.keys.length === (2 * this.order) - 1) {
            let newRoot = new BTreeNode(this.order, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            root = newRoot;
        }
        
        this.insertNonFull(root, key);
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
        let newChild = new BTreeNode(this.order, parent.children[index].leaf);
        let child = parent.children[index];
        parent.keys.splice(index, 0, child.keys[this.order - 1]);
        parent.children.splice(index + 1, 0, newChild);

        newChild.keys = child.keys.splice(this.order);
        if (!child.leaf) {
            newChild.children = child.children.splice(this.order);
        }
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
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
        
        return this.searchNode(node.children[i], key);
    }
}

// Example usage
let btree = new BTree(3);
btree.insert(1);
btree.insert(3);
btree.insert(7);
btree.insert(10);

console.log(btree.search(3));  // Output: true
console.log(btree.search(5));  // Output: false
