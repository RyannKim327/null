class BTreeNode<T> {
    keys: T[] = [];
    children: BTreeNode<T>[] = [];
    leaf: boolean;
    t: number; // minimum degree

    constructor(t: number, leaf: boolean) {
        this.t = t;
        this.leaf = leaf;
    }

    // Insert a new key when node is not full
    insertNonFull(key: T) {
        let i = this.keys.length - 1;

        if (this.leaf) {
            // Insert the key in the correct position in keys
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            this.keys.splice(i + 1, 0, key); // Insert after i
        } else {
            // Find child to insert into
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            i++;
            if (this.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(i);
                if (this.keys[i] < key) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    splitChild(i: number) {
        const t = this.t;
        const y = this.children[i];
        const z = new BTreeNode<T>(t, y.leaf);

        // z gets t-1 keys from y
        z.keys = y.keys.splice(t); 
        if (!y.leaf) {
            z.children = y.children.splice(t);
        }

        // Insert middle key into this node
        const midKey = y.keys.pop()!;
        this.keys.splice(i, 0, midKey);
        // Add new child
        this.children.splice(i + 1, 0, z);
    }

    // Search key in subtree rooted with this node
    search(key: T): BTreeNode<T> | null {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }
        if (i < this.keys.length && this.keys[i] === key) {
            return this;
        }
        if (this.leaf) {
            return null;
        }
        return this.children[i].search(key);
    }
}
class BTree<T> {
    root: BTreeNode<T> | null = null;
    t: number; // minimum degree

    constructor(t: number) {
        this.t = t;
    }

    insert(key: T) {
        if (this.root === null) {
            this.root = new BTreeNode<T>(this.t, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                // Root full, need to split
                const s = new BTreeNode<T>(this.t, false);
                s.children.push(this.root);
                s.splitChild(0);
                this.root = s;
            }
            this.root.insertNonFull(key);
        }
    }

    search(key: T): BTreeNode<T> | null {
        return this.root ? this.root.search(key) : null;
    }
}
const btree = new BTree<number>(3); // t=3 means max 5 keys per node

const values = [10, 20, 5, 6, 12, 30, 7, 17];
for (const val of values) {
    btree.insert(val);
}

const foundNode = btree.search(6);
console.log(foundNode ? "Found!" : "Not Found");
