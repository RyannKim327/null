class Node {
    constructor(order, isLeaf) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf || false;
        this.order = order;
    }
}

class BTree {
    constructor(order) {
        this.root = new Node(order, true);
        this.order = order;
    }

    insert(key) {
        let rootNode = this.root;

        if (rootNode.keys.length === 2 * this.order - 1) {
            let newRoot = new Node(this.order);
            newRoot.children.push(rootNode);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(rootNode, key);
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

    search(key) {
        return this.searchInNode(this.root, key);
    }

    searchInNode(node, key) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (node.keys[i] === key) {
            return true;
        }
        if (node.isLeaf) {
            return false;
        } else {
            return this.searchInNode(node.children[i], key);
        }
    }
}

// Example usage:
let bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);

console.log(bTree.search(5)); // Output: true
console.log(bTree.search(15)); // Output: false
