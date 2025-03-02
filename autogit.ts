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

    // Function to traverse all keys in a subtree rooted with this node
    traverse(): void {
        let i: number;
        for (i = 0; i < this.keys.length; i++) {
            // If it's not a leaf, traverse the child before the key
            if (!this.isLeaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]); // Print the key
        }

        // Traverse the last child
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

        // If this node is a leaf, then the key is not present
        if (this.isLeaf) {
            return null;
        }

        // Go to the appropriate child
        return this.children[i].search(key);
    }

    // Function to insert a new key in the subtree rooted with this node
    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        // If this node is a leaf
        if (this.isLeaf) {
            // Locate the position to insert the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert key
        } else {
            // Locate the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++; // i is now the index of the child to insert

            // If the found child is full, then split it
            if (this.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(i);
                // After split, the middle key goes up and we need to decide which of the two children to continue with
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // A utility function to split the child of this node. i is index of the child to be split.
    splitChild(i: number): void {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);
        
        // Move the last t-1 keys of y to z
        for (let j = 0; j < t - 1; j++) {
            z.keys.push(y.keys[j + t]);
        }

        // If y is not leaf, move the last t children of y to z
        if (!y.isLeaf) {
            for (let j = 0; j < t; j++) {
                z.children.push(y.children[j + t]);
            }
        }

        // Reduce the number of keys in y
        y.keys.length = t - 1;

        // Insert z as a child of this node
        this.children.splice(i + 1, 0, z);
        // A key of y will move to this node
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

    // Function to traverse the whole B-Tree
    traverse(): void {
        if (this.root) {
            this.root.traverse();
        }
    }

    // Function to search a key in B-tree
    search(key: number): BTreeNode | null {
        if (!this.root) {
            return null;
        }
        return this.root.search(key);
    }

    // Function to insert a new key in the B-tree
    insert(key: number): void {
        if (this.root === null) {
            // Allocate memory for root
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key); // Insert the key
        } else {
            // If root is full, then tree grows in height
            if (this.root.keys.length === 2 * this.t - 1) {
                const newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(this.root);
                newRoot.splitChild(0);
                const i = newRoot.keys[0] < key ? 1 : 0; // Determine which child to go down to
                newRoot.children[i].insertNonFull(key);
                this.root = newRoot; // Update root
            } else {
                this.root.insertNonFull(key);
            }
        }
    }
}
const bTree = new BTree(3); // Creating a B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

// Traversing the B-tree
bTree.traverse(); // Outputs: 5, 6, 7, 10, 12, 17, 20, 30

// Searching for a key 
const foundNode = bTree.search(12);
console.log(foundNode ? "Found" : "Not Found"); // Outputs: Found
