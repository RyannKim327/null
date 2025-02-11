class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    t: number; // Minimum degree (defines the range for number of keys)

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
            // If this is not a leaf, traverse the child before printing the key
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }

        // Print the subtree rooted with the last child
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
            // Find the location of new key to be inserted
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            // Insert the new key at found location
            this.keys.splice(i + 1, 0, key);
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            // Check if the found child is full
            if (this.children[i + 1].keys.length === 2 * this.t - 1) {
                // If the child is full, then split it
                this.splitChild(i + 1);
                // After split, the middle key of child goes up and
                // the child is split into two. See which of the two
                // is going to have the new key
                if (key > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key);
        }
    }

    // Function to split the child of this node. `i` is index of the child
    // to be split. The child will be split into two and a new key will be
    // promoted to this node.
    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Copy the last t-1 keys of y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        // Copy the last t children of y to z
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys.length = t - 1;

        // Since this node is going to have a new child,
        // create space for the new child
        this.children.splice(i + 1, 0, z);

        // A key of y will move to this node. Find location of
        // new key and move all greater keys one space ahead
        this.keys.splice(i, 0, y.keys.pop()!);
    }
}

class BTree {
    root: BTreeNode | null;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Function to traverse the tree
    traverse
