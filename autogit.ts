class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    t: number;

    constructor(t: number, isLeaf: boolean) {
        this.t = t; // Minimum degree
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    // Insert a new key into the node
    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // If this is a leaf node, insert the key directly
            this.keys.push(0); // Create space for the new key
            while (i >= 0 && key < this.keys[i]) {
                this.keys[i + 1] = this.keys[i]; // Shift keys to the right
                i--;
            }
            this.keys[i + 1] = key; // Place the new key
        } else {
            // If this is not a leaf node, find the child that is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            // Check if the found child is full
            if (this.children[i + 1].keys.length === 2 * this.t - 1) {
                this.splitChild(i + 1); // Split the child
                // After split, the middle key of child goes up
                // Check which of the two children to recurse
                if (key > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key); // Recur down to the appropriate child
        }
    }

    // Split the child of this node
    splitChild(i: number): void {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode(t, y.isLeaf);

        // Transfer the keys and children from y to z
        z.keys = y.keys.splice(t); // Copy second half keys to z
        if (!y.isLeaf) {
            z.children = y.children.splice(t); // Copy second half children to z
        }

        // Insert the new child into this node
        this.children.splice(i + 1, 0, z); // Create space
        this.keys.splice(i, 0, y.keys.pop()!); // Move mid key up
    }
}

class BTree {
    root: BTreeNode;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    // Insert a new key
    insert(key: number): void {
        if (this.root.keys.length === 2 * this.t - 1) {
            // If root is full, then tree grows in height
            const newNode = new BTreeNode(this.t, false);
            newNode.children.push(this.root);
            newNode.splitChild(0);
            this.root = newNode; // Update root
        }
        this.root.insertNonFull(key);
    }

    // Search a key
    search(key: number): BTreeNode | null {
        return this.searchNode(this.root, key);
    }

    private searchNode(node: BTreeNode, key: number): BTreeNode | null {
        let i = 0;

        // Find the first key greater than or equal to key
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        // If found a key that equals key, return this node
        if (i < node.keys.length && node.keys[i] === key) {
            return node;
        }

        // If this is a leaf node, key is not found
        if (node.isLeaf) {
            return null;
        }

        // Go to the appropriate child
        return this.searchNode(node.children[i], key);
    }
}

// Example usage:
const bTree = new BTree(3); // A B-tree with a minimum degree of 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log(bTree.search(10)); // Should return the node containing 10
console.log(bTree.search(15)); // Should return null, as 15 is not in the B-tree
