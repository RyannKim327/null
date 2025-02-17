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
}

class BTree {
    root: BTreeNode | null;
    degree: number;

    constructor(degree: number) {
        this.root = null;
        this.degree = degree;
    }

    insert(key: number) {
        if (this.root === null) {
            this.root = new BTreeNode(this.degree, true);
            this.root.keys.push(key);
        } else {
            if (this.root.keys.length === 2 * this.degree - 1) {
                const newRoot = new BTreeNode(this.degree, false);
                newRoot.children.push(this.root);
                newRoot.splitChild(0);
                const index = newRoot.keys.findIndex(k => key < k);
                if (index === -1) newRoot.children[newRoot.children.length - 1].insertNonFull(key);
                else newRoot.children[index].insertNonFull(key);
                this.root = newRoot;
            } else {
                this.root.insertNonFull(key);
            }
        }
    }

    // Method for searching the key in the B-tree
    search(key: number, node: BTreeNode | null = this.root): BTreeNode | null {
        if (node === null) return null;

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && node.keys[i] === key) return node;

        return node.isLeaf ? null : this.search(key, node.children[i]);
    }
}

BTreeNode.prototype.insertNonFull = function (this: BTreeNode, key: number) {
    let i = this.keys.length - 1;

    if (this.isLeaf) {
        while (i >= 0 && key < this.keys[i]) {
            i--;
        }
        this.keys.splice(i + 1, 0, key);
    } else {
        while (i >= 0 && key < this.keys[i]) {
            i--;
        }
        const childIndex = i + 1;
        if (this.children[childIndex].keys.length === 2 * this.degree - 1) {
            this.splitChild(childIndex);
            if (key > this.keys[childIndex]) {
                this.children[childIndex + 1].insertNonFull(key);
            } else {
                this.children[childIndex].insertNonFull(key);
            }
        } else {
            this.children[childIndex].insertNonFull(key);
        }
    }
};

BTreeNode.prototype.splitChild = function (this: BTreeNode, index: number) {
    const t = this.degree;
    const y = this.children[index];
    const z = new BTreeNode(t, y.isLeaf);

    this.keys.splice(index, 0, y.keys[t - 1]);
    this.children.splice(index + 1, 0, z);

    for (let j = 0; j < t - 1; j++) {
        z.keys.push(y.keys[j + t]);
    }

    if (!y.isLeaf) {
        for (let j = 0; j < t; j++) {
            z.children.push(y.children[j + t]);
        }
    }

    y.keys.splice(t - 1);
    y.children.splice(t);
};

const bTree = new BTree(3);  // Create a B-tree with minimum degree 3 (t=3)
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

const found = bTree.search(10); // Should return the node containing 10
console.log(found);
