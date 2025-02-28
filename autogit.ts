class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    ord: number; // Order of the B-tree

    constructor(ord: number, isLeaf: boolean) {
        this.ord = ord;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    insertNonFull(key: number): void {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // Insert a new key in a leaf node
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key);
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++;

            // Check if the found child is full
            if (this.children[i].keys.length === this.ord - 1) {
                this.splitChild(i);
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    splitChild(i: number): void {
        const y = this.children[i];
        const z = new BTreeNode(y.ord, y.isLeaf);
        
        // Move half of the keys to the new child
        z.keys = y.keys.splice(Math.ceil((this.ord - 1) / 2), y.keys.length);
        
        if (!y.isLeaf) {
            z.children = y.children.splice(Math.ceil(y.children.length / 2), y.children.length);
        }

        this.children.splice(i + 1, 0, z);
        this.keys.splice(i, 0, y.keys.pop()!);
    }
}

class BTree {
    root: BTreeNode;
    ord: number; // Order of the B-tree

    constructor(ord: number) {
        this.root = new BTreeNode(ord, true);
        this.ord = ord;
    }

    insert(key: number): void {
        const root = this.root;
        if (root.keys.length === this.ord - 1) {
            const newRoot = new BTreeNode(this.ord, false);
            newRoot.children.push(root);
            newRoot.splitChild(0);
            newRoot.insertNonFull(key);
            this.root = newRoot;
        } else {
            root.insertNonFull(key);
        }
    }
}

// Usage example
const bTree = new BTree(3); // Create a B-Tree with order 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
