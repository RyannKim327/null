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

    // Function to insert a new key in this node
    insertNonFull(key: number) {
        let i = this.keys.length - 1;

        // If this is a leaf node
        if (this.isLeaf) {
            // Find the location of the new key to be inserted
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
                // After split, the middle key of child goes up and this
                // node will have two children. Decide which of the two
                // children to recurse on
                if (key > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key);
        }
    }

    // Function to split the child of this node. `i` is index of the child
    // to be split. The child will be split into two nodes and a key
    // will be moved up to this node.
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

    // Function to insert a new key
    insert(key: number) {
        const root = this.root;

        // If root is full, then tree grows in height
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

// Example usage
const bTree = new BTree(3); // A B-tree with minimum degree 3

