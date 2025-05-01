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

    // Function to traverse the tree
    traverse() {
        let i: number;
        for (i = 0; i < this.keys.length; i++) {
            // If this is not a leaf, go to the child
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }

        // Print the subtree rooted with last child
        if (!this.isLeaf) {
            this.children[i].traverse();
        }
    }

    // Function to insert a new key in this node
    insertNonFull(k: number) {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // The following loop does two things:
            // a) Finds the location of new key to be inserted
            // b) Moves all greater keys one space ahead
            while (i >= 0 && k < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, k); // Insert the new key
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && k < this.keys[i]) {
                i--;
            }
            // See if the found child is full
            if (this.children[i + 1].keys.length === 2 * this.t - 1) {
                // If the child is full, then split it
                this.splitChild(i + 1);
                // After split, the middle key of child goes up and
                // the child is split into two, we may need to choose
                // which of the two children to recurse on
                if (k > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(k);
        }
    }

    // Function to split the child y of this node. i is index of y in
    // child array children[].
    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);
        
        // Copy the last t-1 keys of y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        // If y is not a leaf, copy the last t children of y to z
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys = y.keys.slice(0, t - 1);

        // Since this node is going to have a new child, create space
        this.children.splice(i + 1, 0, z);
        // A key of y will move to this node. Find the location of
        // new key and put it there
        this.keys.splice(i, 0, y.keys[t - 1]);
    }
}

class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.t = t;
        this.root = new BTreeNode(t, true); // Create the root node
    }

    // Function to traverse the tree
    traverse() {
        this.root.traverse();
    }

    // Function to insert a new key
    insert(k: number) {
        const root = this.root;

        // If root is full, then tree grows in height
        if (root.keys.length === 2 * this.t - 1) {
            const newNode = new BTreeNode(this.t, false);
            newNode.children.push(this.root);
            newNode.splitChild(0);
            const newRoot = newNode;
            this.root = newRoot;
            this.root.insertNonFull(k);
        } else {
            root.insertNonFull(k);
        }
    }
}

// Example usage:
const btree = new BTree(3); // A B-tree with min degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

// Print all keys in sorted order
btree.traverse();
