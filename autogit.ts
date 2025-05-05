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

    // Function to traverse all keys in the node
    traverse() {
        let i: number;
        for (i = 0; i < this.keys.length; i++) {
            // If this is not a leaf, recursively traverse the child before printing the key
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

    // Function to insert a new key in the node
    insertNonFull(key: number) {
        let i = this.keys.length - 1;

        // If this is a leaf node
        if (this.isLeaf) {
            // Find the location to insert the new key
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
            if (this.children[i + 1].keys.length === (2 * this.degree - 1)) {
                this.splitChild(i + 1, this.children[i + 1]);

                // After split, decide which of the two children to go to
                if (key > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key);
        }
    }

    // Function to split the child
    splitChild(i: number, y: BTreeNode) {
        const z = new BTreeNode(y.degree, y.isLeaf);
        
        // Moving keys from y to the new node z
        for (let j = 0; j < this.degree - 1; j++) {
            z.keys.push(y.keys[j + this.degree]); // Move the last t-1 keys of y
        }

        // If y is not a leaf, move the last t children of y
        if (!y.isLeaf) {
            for (let j = 0; j < this.degree; j++) {
                z.children.push(y.children[j + this.degree]);
            }
        }

        // Reducing the number of keys in y
        y.keys.length = this.degree - 1;

        // Inserting new child into this node
        this.children.splice(i + 1, 0, z);
        this.keys.splice(i, 0, y.keys.pop()!); // Increase the number of keys in this node
    }
}

class BTree {
    root: BTreeNode;
    degree: number;

    constructor(degree: number) {
        this.root = new BTreeNode(degree, true); // Create the root
        this.degree = degree;
    }

    // Function to insert a key
    insert(key: number) {
        const root = this.root;

        // If root is full, then tree grows in height
        if (root.keys.length === (2 * this.degree - 1)) {
            const newRoot = new BTreeNode(this.degree, false);
            newRoot.children.push(root);
            newRoot.splitChild(0, root);
            newRoot.insertNonFull(key);
            this.root = newRoot;
        } else {
            root.insertNonFull(key);
        }
    }

    // Function to traverse the tree and print all keys
    traverse() {
        this.root.traverse();
    }
}

// Example usage:
const bTree = new BTree(2); // Create a B-tree of order 2
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

// Print the B-tree
bTree.traverse(); // Should show the sorted keys in a B-tree style
