class BTreeNode {
    keys: number[];
    children: (BTreeNode | null)[];
    isLeaf: boolean;

    constructor(isLeaf: boolean) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }

    // Helper method to find the index where a key should be inserted
    findKeyIndex(key: number): number {
        let index = 0;
        while (index < this.keys.length && this.keys[index] < key) {
            index++;
        }
        return index;
    }
}
class BTree {
    root: BTreeNode | null;
    degree: number; // Minimum degree (defines the minimum and maximum number of keys per node)

    constructor(degree: number) {
        this.root = null;
        this.degree = degree;
    }

    // Search for a key in the B-tree
    search(key: number, node: BTreeNode | null = this.root): boolean {
        if (!node) return false;

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return true; // Key found
        } else if (node.isLeaf) {
            return false; // Key not found in a leaf node
        } else {
            return this.search(key, node.children[i]); // Recur into the appropriate child
        }
    }

    // Insert a key into the B-tree
    insert(key: number): void {
        if (!this.root) {
            // Create a new root if the tree is empty
            this.root = new BTreeNode(true);
            this.root.keys.push(key);
        } else {
            // If the root is full, split it and create a new root
            if (this.root.keys.length === 2 * this.degree - 1) {
                const newRoot = new BTreeNode(false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

    // Insert a key into a non-full node
    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            // Insert the key into the correct position in the leaf node
            node.keys.push(0); // Add a placeholder
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            // Find the child to descend into
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            // Check if the child is full
            const child = node.children[i];
            if (child && child.keys.length === 2 * this.degree - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i]!, key);
        }
    }

    // Split a full child node
    private splitChild(parent: BTreeNode, index: number): void {
        const degree = this.degree;
        const child = parent.children[index]!;
        const newChild = new BTreeNode(child.isLeaf);

        // Move the median key up to the parent
        parent.keys.splice(index, 0, child.keys[degree - 1]);
        parent.children.splice(index + 1, 0, newChild);

        // Split the keys and children between the old and new child
        newChild.keys = child.keys.splice(degree, degree - 1);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(degree, degree);
        }
    }

    // Delete a key from the B-tree
    delete(key: number): void {
        if (!this.root) return;

        this.deleteKey(this.root, key);

        // If the root has no keys left, make its first child the new root
        if (this.root.keys.length === 0 && !this.root.isLeaf) {
            this.root = this.root.children[0] || null;
        }
    }

    private deleteKey(node: BTreeNode, key: number): void {
        const index = node.findKeyIndex(key);

        if (index < node.keys.length && node.keys[index] === key) {
            if (node.isLeaf) {
                // Case 1: Key is in a leaf node
                node.keys.splice(index, 1);
            } else {
                // Case 2: Key is in an internal node
                this.deleteInternalNode(node, key, index);
            }
        } else {
            if (node.isLeaf) {
                // Key does not exist in the tree
                return;
            }

            const child = node.children[index];
            if (child && child.keys.length === this.degree - 1) {
                // Ensure the child has at least `degree` keys before descending
                this.fixChildBeforeDeletion(node, index);
            }

            // Recur into the appropriate child
            this.deleteKey(node.children[index]!, key);
        }
    }

    private deleteInternalNode(node: BTreeNode, key: number, index: number): void {
        const predecessor = this.getPredecessor(node, index);
        const successor = this.getSuccessor(node, index);

        if (predecessor.keys.length >= this.degree) {
            // Case 2a: Replace key with its predecessor
            node.keys[index] = predecessor.keys.pop()!;
            this.deleteKey(predecessor, node.keys[index]);
        } else if (successor.keys.length >= this.degree) {
            // Case 2b: Replace key with its successor
            node.keys[index] = successor.keys.shift()!;
            this.deleteKey(successor, node.keys[index]);
        } else {
            // Case 2c: Merge the child containing the key with its sibling
            this.mergeChildren(node, index);
            this.deleteKey(node.children[index]!, key);
        }
    }

    private getPredecessor(node: BTreeNode, index: number): BTreeNode {
        let current = node.children[index]!;
        while (!current.isLeaf) {
            current = current.children[current.children.length - 1]!;
        }
        return current;
    }

    private getSuccessor(node: BTreeNode, index: number): BTreeNode {
        let current = node.children[index + 1]!;
        while (!current.isLeaf) {
            current = current.children[0]!;
        }
        return current;
    }

    private fixChildBeforeDeletion(node: BTreeNode, index: number): void {
        const child = node.children[index]!;
        const leftSibling = index > 0 ? node.children[index - 1] : null;
        const rightSibling = index < node.children.length - 1 ? node.children[index + 1] : null;

        if (leftSibling && leftSibling.keys.length >= this.degree) {
            // Borrow a key from the left sibling
            this.borrowFromLeftSibling(node, index);
        } else if (rightSibling && rightSibling.keys.length >= this.degree) {
            // Borrow a key from the right sibling
            this.borrowFromRightSibling(node, index);
        } else {
            // Merge the child with its sibling
            if (leftSibling) {
                this.mergeChildren(node, index - 1);
            } else {
                this.mergeChildren(node, index);
            }
        }
    }

    private borrowFromLeftSibling(parent: BTreeNode, index: number): void {
        const child = parent.children[index]!;
        const leftSibling = parent.children[index - 1]!;

        // Move the parent's key down to the child
        child.keys.unshift(parent.keys[index - 1]);
        parent.keys[index - 1] = leftSibling.keys.pop()!;

        if (!child.isLeaf) {
            // Move the last child of the left sibling to the child
            child.children.unshift(leftSibling.children.pop()!);
        }
    }

    private borrowFromRightSibling(parent: BTreeNode, index: number): void {
        const child = parent.children[index]!;
        const rightSibling = parent.children[index + 1]!;

        // Move the parent's key down to the child
        child.keys.push(parent.keys[index]);
        parent.keys[index] = rightSibling.keys.shift()!;

        if (!child.isLeaf) {
            // Move the first child of the right sibling to the child
            child.children.push(rightSibling.children.shift()!);
        }
    }

    private mergeChildren(parent: BTreeNode, index: number): void {
        const child = parent.children[index]!;
        const nextChild = parent.children[index + 1]!;

        // Merge the parent's key and the next child into the child
        child.keys.push(parent.keys.splice(index, 1)[0]);
        child.keys = child.keys.concat(nextChild.keys);

        if (!child.isLeaf) {
            child.children = child.children.concat(nextChild.children);
        }

        // Remove the next child from the parent
        parent.children.splice(index + 1, 1);
    }
}
const btree = new BTree(3); // Create a B-tree of degree 3

// Insert keys
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

// Search for keys
console.log(btree.search(10)); // true
console.log(btree.search(7));  // false

// Delete a key
btree.delete(20);
console.log(btree.search(20)); // false
