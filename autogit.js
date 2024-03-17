class Node {
    constructor(order, isLeaf) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
        this.order = order;
    }
}
class BTree {
    constructor(order) {
        this.root = new Node(order, true);
        this.order = order;
    }

    insert(key) {
        let root = this.root;
        if (root.keys.length === 2 * this.order - 1) {
            let newRoot = new Node(this.order, false);
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
            if (node.children[i].keys.length === 2 * this.order - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(node, i) {
        let order = this.order;
        let child = node.children[i];
        let newChild = new Node(order, child.isLeaf);
        node.children.splice(i + 1, 0, newChild);
        node.keys.splice(i, 0, child.keys[order - 1]);
        newChild.keys = child.keys.splice(order, order - 1);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(order, order);
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
        if (i < node.keys.length && key === node.keys[i]) {
            return node;
        }
        if (node.isLeaf) {
            return null;
        } else {
            return this.searchNode(node.children[i], key);
        }
    }
}
let btree = new BTree(3);
btree.insert(5);
btree.insert(10);
btree.insert(3);
btree.insert(7);
btree.insert(12);

console.log(btree.search(7));
