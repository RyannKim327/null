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

    insert(key) {
        if (this.root.keys.length === 2 * this.order - 1) {
            let newRoot = new Node(this.order, false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }
        
        this.insertNonFull(this.root, key);
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        
        if (node.isLeaf) {
            node.keys.push(null);
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

        node.keys.splice(i, 0, child.keys[order - 1]);

        newChild.keys = child.keys.splice(order);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(order);
        }

        node.children.splice(i + 1, 0, newChild);
    }
}

// Example usage
const btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);

console.log(btree);
