class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    leaf: boolean;
    t: number; // Minimum degree

    constructor(t: number, leaf: boolean) {
        this.t = t;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }

    // Insert a new key in a non-full node
    insertNonFull(key: number) {
        let i = this.keys.length - 1;

        if (this.leaf) {
            // Find the location where new key should be inserted
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert key 

        } else {
            // Find the child that is going to have the new key
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            i++;
            if (this.children[i].keys.length === (2 * this.t - 1)) {
                this.splitChild(i);
                if (this.keys[i] < key) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Split the child of this node
    splitChild(i: number) {
        const y = this.children[i];
        const z = new BTreeNode(y.t, y.leaf);

        // Move the last t-1 keys of y to z
        for (let j = 0; j < this.t - 1; j++) {
            z.keys[j] = y.keys[j + this.t];
        }
        if (!y.leaf) {
            for (let j = 0; j < this.t; j++) {
                z.children[j] = y.children[j + this.t];
            }
        }
        
        // Reduce the number of keys in y
        y.keys.length = this.t - 1;

        // Insert a new child into this node
        this.children.splice(i + 1, 0, z);
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

    // Insert a new key in the B-tree
    insert(key: number) {
        const root = this.root;
        if (root.keys.length === (2 * this.t - 1)) {
            const newNode = new BTreeNode(this.t, false);
            newNode.children[0] = this.root;
            newNode.splitChild(0);
            const i = newNode.keys[0] < key ? 1 : 0;
            newNode.children[i].insertNonFull(key);
            this.root = newNode;
        } else {
            root.insertNonFull(key);
        }
    }

    // You can add search, delete and other functionalities as needed
}
const bTree = new BTree(3); // Creating a B-tree with a minimum degree of 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);
