class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    isLeaf: boolean;
    degree: number;

    constructor(degree: number, isLeaf = true) {
        this.degree = degree;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    // Insert a new key in the node
    insertNonFull(key: T): void {
        let i = this.keys.length - 1;

        if (this.isLeaf) {
            // Insert a new key in the leaf node
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            this.keys.splice(i + 1, 0, key);
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            i++; // Note that this is the first child that is greater than the key

            if (this.children[i].keys.length === 2 * this.degree - 1) {
                // If the child is full, then split it
                this.splitChild(i);
                // After the split, the middle key of the split child goes up and
                // the child is split into two, need to check which of the two
                // children is going to have the new key
                if (key > this.keys[i]) {
                    i++;
                }
            }
            this.children[i].insertNonFull(key);
        }
    }

    // Split the child of this node
    splitChild(i: number): void {
        const y = this.children[i];
        const z = new BTreeNode<T>(y.degree, y.isLeaf);

        // Move the last `degree - 1` keys of y to z
        for (let j = 0; j < this.degree - 1; j++) {
            z.keys.push(y.keys.pop()!);
        }

        // If y is not a leaf, move the last degree children of y to z
        if (!y.isLeaf) {
            for (let j = 0; j < this.degree; j++) {
                z.children.push(y.children.pop()!);
            }
        }

        // Insert a middle key of y into this node
        this.keys.splice(i, 0, y.keys.pop()!);
        // Insert new child to this node
        this.children.splice(i + 1, 0, z);
    }
}

class BTree<T> {
    root: BTreeNode<T>;
    degree: number;

    constructor(degree: number) {
        this.degree = degree;
        this.root = new BTreeNode<T>(degree);
    }

    // Insert a key into the B-tree
    insert(key: T): void {
        if (this.root.keys.length === 2 * this.degree - 1) {
            // Tree is full, need to create a new root
            const newRoot = new BTreeNode<T>(this.degree, false);
            newRoot.children.push(this.root);
            newRoot.splitChild(0);
            this.root = newRoot;
        }

        this.root.insertNonFull(key);
    }

    // Search a key in the B-tree
    search(key: T, node: BTreeNode<T> = this.root): boolean {
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

        return this.search(key, node.children[i]); // Search in the appropriate child
    }

    // Inorder traversal of the B-tree
    inorder(node: BTreeNode<T> = this.root): T[] {
        const result: T[] = [];
        let i;

        for (i = 0; i < node.keys.length; i++) {
            // Visit the child before the key
            if (!node.isLeaf) {
                result.push(...this.inorder(node.children[i]));
            }
            // Visit the key itself
            result.push(node.keys[i]);
        }

        // Visit the last child
        if (!node.isLeaf) {
            result.push(...this.inorder(node.children[i]));
        }

        return result;
    }
}

// Example usage:
const bTree = new BTree<number>(3); // Create a B-tree with degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log("Inorder traversal of B-tree:", bTree.inorder());
console.log("Search for 10:", bTree.search(10)); // should return true
console.log("Search for 15:", bTree.search(15)); // should return false
