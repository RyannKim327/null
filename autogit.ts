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

    // Function to traverse all nodes in a subtree rooted with this node
    traverse() {
        let i: number;
        for (i = 0; i < this.keys.length; i++) {
            // If this is not a leaf, then before the key, traverse the child
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }

        // Finally, traverse the last child
        if (!this.isLeaf) {
            this.children[i].traverse();
        }
    }

    // Function to search a key in the subtree rooted with this node
    search(key: number): BTreeNode | null {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }

        // If the found key is equal to the key, return this node
        if (i < this.keys.length && this.keys[i] === key) {
            return this;
        }

        // If this node is a leaf node, then the key is not present
        if (this.isLeaf) {
            return null;
        }

        // Go to the appropriate child
        return this.children[i].search(key);
    }

    // Function to insert a new key in the subtree rooted with this node
    insertNonFull(key: number) {
        let i = this.keys.length - 1;

        // If this is a leaf node
        if (this.isLeaf) {
            // Find the location to insert the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert the new key
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++;

            // If the found child is full, then split it
            if (this.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(i);
                // After split, the middle key of children[i] goes up and
                // children[i] is split into two. See which of the two
                // is going to have the new key
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Function to split the child of this node. `i` is index of the child
    // to be split. The child will be split into two and a new key will be
    // promoted to this node.
    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Give z the last t-1 keys of y
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        // If y is not a leaf, then give z the last t children of y
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys.length = t - 1;

        // Since this node is going to have a new child, create space for
        // the new child
        this.children.splice(i + 1, 0, z);

        // A key of y will move to this node. Find location of new key
        // and move all greater keys one space ahead
        this.keys.splice(i, 0, y.keys.pop()!);
    }
}

class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    // Function to traverse the tree
    traverse() {
        this.root.traverse();
    }

    // Function to search a key in
