class Node {
    constructor(isLeaf) {
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(order) {
        this.root = new Node(true); // The root node is initially a leaf node
        this.order = order;
    }

    insert(key) {
        const root = this.root;

        if (root.keys.length < this.order - 1) {
            this.insertNonFull(root, key);
        } else {
            const newRoot = new Node(false); // Create a new root node
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.insertNonFull(newRoot, key);
            this.root = newRoot;
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
            if (node.children[i].keys.length === this.order - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }

            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(parent, index) {
        const order = this.order;
        const node = parent.children[index];
        const left = new Node(node.isLeaf);
        const right = new Node(node.isLeaf);

        const mid = Math.floor(order / 2);
        left.keys = node.keys.slice(0, mid);
        right.keys = node.keys.slice(mid + 1);
        
        if (!node.isLeaf) {
            left.children = node.children.slice(0, mid + 1);
            right.children = node.children.slice(mid + 1);
        }

        parent.keys.splice(index, 0, node.keys[mid]);
        parent.children.splice(index, 1, left, right);
    }

    search(key, node = this.root) {
        let i = 0;

        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return true;
        }

        if (node.isLeaf) {
            return false;
        }

        return this.search(key, node.children[i]);
    }
}

// Usage
const bTree = new BTree(3);

// Insert keys into the B-tree
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);

// Search for a key in the B-tree
console.log(bTree.search(10)); // Output should be true
console.log(bTree.search(15)); // Output should be false
