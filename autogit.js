class BTreeNode {
    constructor(degree, leaf) {
        this.degree = degree;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(degree) {
        this.root = new BTreeNode(degree, true);
        this.degree = degree;
    }

    splitChild(parent, index) {
        let newChild = new BTreeNode(this.degree, true);
        let child = parent.children[index];
        
        newChild.keys = child.keys.splice(this.degree);
        
        if (!child.leaf) {
            newChild.children = child.children.splice(this.degree + 1);
        }
        
        parent.keys.splice(index, 0, child.keys.pop());
        parent.children.splice(index + 1, 0, newChild);
    }

    insert(key) {
        let root = this.root;
        if (root.keys.length === (2 * this.degree) - 1) {
            let newRoot = new BTreeNode(this.degree, false);
            newRoot.children.push(root);
            this.root = newRoot;
            this.splitChild(newRoot, 0);
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
            if (node.children[i].keys.length === (2 * this.degree) - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    search(key) {
        return this.searchRecursive(this.root, key);
    }

    searchRecursive(node, key) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        
        if (node.keys[i] === key) {
            return `Key ${key} found in the B-tree`;
        } else if (node.leaf) {
            return `Key ${key} not found in the B-tree`;
        } else {
            return this.searchRecursive(node.children[i], key);
        }
    }
}
