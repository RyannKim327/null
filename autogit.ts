class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    t: number; // Minimum degree

    constructor(t: number, isLeaf: boolean) {
        this.t = t;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}
class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    // Actual insertion
    insert(key: number) {
        let root = this.root;
        if (root.keys.length === 2 * this.t - 1) {
            const newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(root);
            newRoot.splitChild(0);
            this.root = newRoot;
            newRoot.insertNonFull(key);
        } else {
            root.insertNonFull(key);
        }
    }

    search(key: number, node: BTreeNode = this.root): BTreeNode | null {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        // If the key is found
        if (i < node.keys.length && node.keys[i] === key) {
            return node;
        }

        // If it's a leaf node, key is not present
        if (node.isLeaf) {
            return null;
        }

        return this.search(key, node.children[i]);
    }

    // Print the tree structure
    print(node: BTreeNode = this.root, level: number = 0): void {
        console.log('Level ' + level + ': ', node.keys);
        for (const child of node.children) {
            this.print(child, level + 1);
        }
    }
}

// Extend the BTreeNode class with splitChild and insertNonFull methods
BTreeNode.prototype.splitChild = function (i: number) {
    const t = this.t;
    const y = this.children[i];
    const z = new BTreeNode(t, y.isLeaf);

    // Move the last t-1 keys from y to z
    for (let j = 0; j < t - 1; j++) {
        z.keys.push(y.keys[j + t]);
    }
    if (!y.isLeaf) {
        for (let j = 0; j < t; j++) {
            z.children.push(y.children[j + t]);
        }
    }
    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys[t - 1]);
    y.keys.splice(t - 1);
};

BTreeNode.prototype.insertNonFull = function (key: number) {
    let i = this.keys.length - 1;
    if (this.isLeaf) {
        // Find location of new key to be inserted
        while (i >= 0 && key < this.keys[i]) {
            i--;
        }
        this.keys.splice(i + 1, 0, key); // Insert the new key
    } else {
        // Locate the child which is going to have the new key
        while (i >= 0 && key < this.keys[i]) {
            i--;
        }
        i++; // Go to the child
        const child = this.children[i];
        if (child.keys.length === 2 * this.t - 1) { // If the child is full
            this.splitChild(i);
            if (key > this.keys[i]) {
                i++;
            }
        }
        this.children[i].insertNonFull(key);
    }
};
const btree = new BTree(3); // Create a B-tree with minimum degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log("B-tree structure:");
btree.print();

// Searching for a key
const foundNode = btree.search(10);
if (foundNode) {
    console.log("Key found in B-tree.");
} else {
    console.log("Key not found in B-tree.");
}
