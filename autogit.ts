class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    leaf: boolean;

    constructor(leaf: boolean) {
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}
class BTree<T> {
    root: BTreeNode<T>;
    t: number; // Minimum degree

    constructor(t: number) {
        this.t = t;
        this.root = new BTreeNode<T>(true);
    }
}
search(node: BTreeNode<T>, key: T): BTreeNode<T> | null {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) i++;

    if (i < node.keys.length && key === node.keys[i]) {
        return node;
    }

    if (node.leaf) {
        return null;
    } else {
        return this.search(node.children[i], key);
    }
}
splitChild(parent: BTreeNode<T>, i: number): void {
    const t = this.t;
    const y = parent.children[i];
    const z = new BTreeNode<T>(y.leaf);
    z.keys = y.keys.splice(t); // last t-1 keys go to z

    if (!y.leaf) {
        z.children = y.children.splice(t); // last t children go to z
    }

    const midKey = y.keys.splice(t - 1, 1)[0]; // middle key moves up
    parent.keys.splice(i, 0, midKey);
    parent.children.splice(i + 1, 0, z);
}
insertNonFull(node: BTreeNode<T>, key: T): void {
    let i = node.keys.length - 1;

    if (node.leaf) {
        // Find position to insert key and insert
        while (i >= 0 && key < node.keys[i]) {
            i--;
        }
        node.keys.splice(i + 1, 0, key);
    } else {
        // Move down to child
        while (i >= 0 && key < node.keys[i]) {
            i--;
        }
        i++;
        // if child is full, split it first
        if (node.children[i].keys.length === 2 * this.t - 1) {
            this.splitChild(node, i);
            if (key > node.keys[i]) {
                i++;
            }
        }
        this.insertNonFull(node.children[i], key);
    }
}
insert(key: T): void {
    const root = this.root;
    if (root.keys.length === 2 * this.t - 1) {
        const s = new BTreeNode<T>(false);
        s.children.push(root);
        this.splitChild(s, 0);
        this.root = s;
        this.insertNonFull(s, key);
    } else {
        this.insertNonFull(root, key);
    }
}
class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    leaf: boolean;

    constructor(leaf: boolean) {
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree<T> {
    root: BTreeNode<T>;
    t: number;

    constructor(t: number) {
        this.t = t;
        this.root = new BTreeNode<T>(true);
    }

    search(node: BTreeNode<T>, key: T): BTreeNode<T> | null {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) i++;

        if (i < node.keys.length && key === node.keys[i]) {
            return node;
        }

        if (node.leaf) {
            return null;
        } else {
            return this.search(node.children[i], key);
        }
    }

    splitChild(parent: BTreeNode<T>, i: number): void {
        const t = this.t;
        const y = parent.children[i];
        const z = new BTreeNode<T>(y.leaf);
        z.keys = y.keys.splice(t); // last t-1 keys go to z

        if (!y.leaf) {
            z.children = y.children.splice(t); // last t children go to z
        }

        const midKey = y.keys.splice(t - 1, 1)[0];
        parent.keys.splice(i, 0, midKey);
        parent.children.splice(i + 1, 0, z);
    }

    insertNonFull(node: BTreeNode<T>, key: T): void {
        let i = node.keys.length - 1;

        if (node.leaf) {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key);
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    insert(key: T): void {
        const root = this.root;
        if (root.keys.length === 2 * this.t - 1) {
            const s = new BTreeNode<T>(false);
            s.children.push(root);
            this.splitChild(s, 0);
            this.root = s;
            this.insertNonFull(s, key);
        } else {
            this.insertNonFull(root, key);
        }
    }
}
const btree = new BTree<number>(3); // min degree t=3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log(btree.search(btree.root, 6));  // Should find 6
console.log(btree.search(btree.root, 15)); // Should return null
