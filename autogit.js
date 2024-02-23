class Node {
    constructor(order, isLeaf = true) {
        this.order = order;
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }
}

class BTree {
    constructor(order) {
        this.root = new Node(order);
        this.order = order;
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
            return node;
        }
        if (node.isLeaf) {
            return null;
        } else {
            return this.searchRecursive(node.children[i], key);
        }
    }

    insert(key) {
        let node = this.root;
        if (node.keys.length === (2 * this.order) - 1) {
            let newRoot = new Node(this.order, false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(node, key);
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
        let newChild = new Node(order, child.isLeaf);
        parent.keys.splice(index, 0, child.keys[order - 1]);
        parent.children.splice(index + 1, 0, newChild);

        newChild.keys = child.keys.splice(order);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(order);
        }
    }
}

// Usage
let bTree = new BTree(2);
bTree.insert(1);
bTree.insert(3);
bTree.insert(5);
bTree.insert(6);
bTree.insert(9);

console.log(bTree.search(5)); // Outputs the node containing key 5
