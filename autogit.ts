class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    isLeaf: boolean;
    t: number; // Minimum degree

    constructor(t: number, isLeaf: boolean) {
        this.t = t;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    // Function to traverse all keys in a subtree rooted with this node
    traverse() {
        let i = 0;
        for (i = 0; i < this.keys.length; i++) {
            // If this is not a leaf, go to the child before the key
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]); // Print the key
        }
        // Finally, visit the last child
        if (!this.isLeaf) {
            this.children[i].traverse();
        }
    }

    // Function to search a key in the subtree rooted with this node
    search(key: T): BTreeNode<T> | null {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }
        if (i < this.keys.length && this.keys[i] === key) {
            return this; // Key found
        }
        if (this.isLeaf) {
            return null; // Key not found
        }
        return this.children[i].search(key); // Go to the correct child
    }

    // Function to insert a new key in this node
    insertNonFull(key: T) {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // Insert a new key when the node is a leaf
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert key
        } else {
            // If this node is not a leaf, find the child that is going to have the new key
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            if (this.children[i + 1].keys.length === (2 * this.t) - 1) {
                // If the child is full, then split it
                this.splitChild(i + 1);
                // After split, the middle key of child goes up and this key is to be inserted in the appropriate child
                if (this.keys[i + 1] < key) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key); // Recur on the child
        }
    }

    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode<T>(t, y.isLeaf);
        
        // Moving keys from y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }
        // If it's not a leaf, move the pointers as well
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }
        
        // Reduce the number of keys in y
        y.keys.length = t - 1; // y now contains t-1 keys

        // Adding a new child and a key to the current node
        this.children.splice(i + 1, 0, z);
        this.keys.splice(i, 0, y.keys.pop()!); // Add the middle key from y to this node
    }
}

class BTree<T> {
    root: BTreeNode<T> | null;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Function to traverse the tree
    traverse() {
        if (this.root) {
            this.root.traverse();
        }
    }

    // Function to search a key
    search(key: T): BTreeNode<T> | null {
        if (!this.root) {
            return null;
        }
        return this.root.search(key);
    }

    // Function to insert a new key
    insert(key: T) {
        if (!this.root) {
            // Tree is empty
            this.root = new BTreeNode<T>(this.t, true);
            this.root.keys.push(key); // Insert the first key
        } else {
            if (this.root.keys.length === (2 * this.t) - 1) {
                // Root node is full
                const newRoot = new BTreeNode<T>(this.t, false);
                newRoot.children.push(this.root);
                newRoot.splitChild(0);
                newRoot.insertNonFull(key);
                this.root = newRoot; // Update the root to the new root
            } else {
                this.root.insertNonFull(key);
            }
        }
    }
}

// Example usage
const bTree = new BTree<number>(3); // B-tree with minimum degree 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log("Traversal of B-tree:");
bTree.traverse();

const searchKey = 12;
const searchResult = bTree.search(searchKey);
console.log(`Search result for ${searchKey}:`, searchResult ? 'Found' : 'Not Found');
