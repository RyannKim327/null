class BTreeNode {
    keys: number[];   // Array of keys
    children: BTreeNode[]; // Array of child pointers
    isLeaf: boolean;  // True if leaf node
    t: number;        // Minimum degree (defines the range for number of keys)

    constructor(t: number, isLeaf: boolean) {
        this.t = t;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    // A function to insert a new key into the subtree rooted with this node
    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // Locate the position to insert the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert key in the sorted order
        } else {
            // Locate the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++;

            // Check if the found child is full
            if (this.children[i].keys.length === 2 * this.t - 1) {
                // Split the child
                this.splitChild(i);
                // After split, the middle key of child goes up and this node
                // is considered the parent for the new subtree
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    splitChild(i: number): void {
        const t = this.t;
        const fullChild = this.children[i];
        const newChild = new BTreeNode(t, fullChild.isLeaf);

        // Move half of the keys and children to the new child
        for (let j = 0; j < t - 1; j++) {
            newChild.keys.push(fullChild.keys[j + t]);
        }
        if (!fullChild.isLeaf) {
            for (let j = 0; j < t; j++) {
                newChild.children.push(fullChild.children[j + t]);
            }
        }

        // Reduce the number of keys in the full child
        fullChild.keys = fullChild.keys.slice(0, t - 1);
        this.children.splice(i + 1, 0, newChild);
        this.keys.splice(i, 0, fullChild.keys.pop()!);
    }
}
class BTree {
    root: BTreeNode | null;
    t: number; // Minimum degree

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    insert(key: number): void {
        if (this.root === null) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                const newRoot = new BTreeNode(this.t, false);
                newRoot.children.push(this.root);
                newRoot.splitChild(0);
                const i = key > newRoot.keys[0] ? 1 : 0;
                newRoot.children[i].insertNonFull(key);
                this.root = newRoot;
            } else {
                this.root.insertNonFull(key);
            }
        }
    }

    search(key: number, node: BTreeNode | null = this.root): boolean {
        if (node === null) {
            return false;
        }

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return true; // Key found
        }

        if (node.isLeaf) {
            return false; // Key not found
        }

        return this.search(key, node.children[i]); // Recur on the child
    }
}
const btree = new BTree(3); // Minimum degree of B-tree

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log(btree.search(10)); // Output: true
console.log(btree.search(15)); // Output: false
