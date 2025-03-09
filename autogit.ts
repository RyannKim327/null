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

    // Function to traverse all keys in the node
    traverse() {
        let i: number;
        for (i = 0; i < this.keys.length; i++) {
            // If this is not a leaf, traverse the child before the key
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }
        // Traverse the last child
        if (!this.isLeaf) {
            this.children[i].traverse();
        }
    }

    // Function to insert a new key in this node
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

            // Check if the found child is full
            if (this.children[i].keys.length === 2 * this.t - 1) {
                // Split the child
                this.splitChild(i);

                // After split, the middle key of child goes up and
                // we need to check which of the two children to insert the key
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Function to split the child of this node
    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Move the last t-1 keys of y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        // If y is not a leaf, move the last t children of y to z
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys.length = t - 1;

        // Insert the new child into this node
        this.children.splice(i + 1, 0, z);
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

    // Function to traverse the B-tree
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
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log("Traversal of the B-tree:");
bTree.traverse();
