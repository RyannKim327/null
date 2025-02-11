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

    // Insert a new key in the subtree rooted with this node
    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // Find the location where the new key should be inserted
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key);
        } else {
            // Find the child that will have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++;

            // Check if the found child is full
            if (this.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(i);

                // After splitting, the middle key of the child goes up
                // and this node is split into two. Check which of the two
                // children is going to have the new key
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Splits the child of this node. The child must be full
    splitChild(i: number): void {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Move half of the keys from y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        y.keys.length = t - 1; // Reduce the number of keys in y

        this.children.splice(i + 1, 0, z); // Add z to this node
        this.keys.splice(i, 0, y.keys.pop()!); // Move the median key up
    }
}

class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    search(key: number): BTreeNode | null {
        return this.root.search(key);
    }

    insert(key: number): void {
        const root = this.root;

        if (root.keys.length === 2 * this.t - 1) {
            const newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(root);
            newRoot.splitChild(0);
            newRoot.insertNonFull(key);
            this.root = newRoot;
        } else {
            root.insertNonFull(key);
        }
    }
}

// Extend BTreeNode with a search method
BTreeNode.prototype.search = function (this: BTreeNode, key: number): BTreeNode | null {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
        i++;
    }

    if (i < this.keys.length && this.keys[i] === key) {
        return this; // The key is found
    }

    if (this.isLeaf) {
        return null; // The key is not found
    }

    return this.children[i].search(key); // Search in the child
};

// Example usage
const bTree = new BTree(3); // B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log(bTree);
console.log(bTree.search(6)); // Should print the node containing key 6
console.log(bTree.search(15)); // Should print null (not found)
