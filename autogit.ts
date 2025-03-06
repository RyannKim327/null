class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    degree: number;

    constructor(degree: number, isLeaf: boolean) {
        this.degree = degree;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    // Function to insert a new key in this node
    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        // If this is a leaf node
        if (this.isLeaf) {
            // Find the location where the new key should be inserted
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            // Insert the new key at the found location
            this.keys.splice(i + 1, 0, key);
        } else {
            // Otherwise, traverse the children to find the correct child
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            i++;

            // Check if the found child is full
            if (this.children[i].keys.length === 2 * this.degree - 1) {
                // Split the child if it's full
                this.splitChild(i);
                // After split, the middle key of child goes up, check which of the two children to recurse into
                if (this.keys[i] < key) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Function to split the full child into two parts
    splitChild(i: number): void {
        const t = this.degree;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Transfer the last (t-1) keys from y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        if (!y.isLeaf) {
            // If y is not a leaf, transfer the children
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys.length = t - 1;

        // Insert the new child into this node
        this.children.splice(i + 1, 0, z);
        // Move the middle key of y to this node
        this.keys.splice(i, 0, y.keys[t - 1]);
    }
}

class BTree {
    root: BTreeNode;
    degree: number;

    constructor(degree: number) {
        this.root = new BTreeNode(degree, true);
        this.degree = degree;
    }

    // Method to insert a new key
    insert(key: number): void {
        const root = this.root;

        // If root is full, then tree grows in height
        if (root.keys.length === 2 * this.degree - 1) {
            const newRoot = new BTreeNode(this.degree, false);
            newRoot.children.push(root);
            newRoot.splitChild(0);
            const i = 0;

            // New root has two children, check where to go next
            if (newRoot.keys[i] < key) {
                i++;
            }
            newRoot.children[i].insertNonFull(key);
            this.root = newRoot;
        } else {
            root.insertNonFull(key);
        }
    }

    // A utility method to search for a key in the B-tree
    search(key: number, node: BTreeNode | null = this.root): BTreeNode | null {
        if (!node) {
            return null;  // Tree is empty
        }

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        // If the found key is equal to key, return this node
        if (i < node.keys.length && node.keys[i] === key) {
            return node;
        }

        // If the node is a leaf, then the key is not present
        if (node.isLeaf) {
            return null;
        }

        // Go to the appropriate child
        return this.search(key, node.children[i]);
    }
}

// Example Usage
const btree = new BTree(3);  // Create a B-tree with degree 3

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log(btree.search(6));  // Search for key 6
console.log(btree.search(15)); // Searching a non-existent key
