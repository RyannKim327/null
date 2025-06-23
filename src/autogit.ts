class BTreeNode {
    keys: number[];
    children: (BTreeNode | null)[];
    isLeaf: boolean;

    constructor(isLeaf: boolean = false) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }

    // Check if the node is full
    isFull(t: number): boolean {
        return this.keys.length === 2 * t - 1;
    }
}
class BTree {
    root: BTreeNode | null;
    t: number; // Minimum degree (defines the range for keys)

    constructor(t: number) {
        this.root = null;
        this.t = t;
    }

    // Search for a key in the B-tree
    search(key: number, node: BTreeNode | null = this.root): { found: boolean, node: BTreeNode | null } {
        if (!node) return { found: false, node: null };

        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return { found: true, node };
        }

        if (node.isLeaf) {
            return { found: false, node: null };
        }

        return this.search(key, node.children[i]);
    }

    // Insert a key into the B-tree
    insert(key: number): void {
        if (!this.root) {
            this.root = new BTreeNode(true);
            this.root.keys.push(key);
            return;
        }

        if (this.root.isFull(this.t)) {
            const newRoot = new BTreeNode(false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }

        this.insertNonFull(this.root, key);
    }

    private splitChild(parent: BTreeNode, index: number): void {
        const t = this.t;
        const child = parent.children[index] as BTreeNode;

        const newNode = new BTreeNode(child.isLeaf);
        newNode.keys = child.keys.splice(t);

        if (!child.isLeaf) {
            newNode.children = child.children.splice(t);
        }

        parent.keys.splice(index, 0, child.keys[t - 1]);
        parent.children.splice(index + 1, 0, newNode);
    }

    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key);
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            const child = node.children[i];
            if (child && child.isFull(this.t)) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i] as BTreeNode, key);
        }
    }

    // Traverse the B-tree (in-order traversal)
    traverse(node: BTreeNode | null = this.root): void {
        if (!node) return;

        for (let i = 0; i < node.keys.length; i++) {
            if (!node.isLeaf) {
                this.traverse(node.children[i]);
            }
            console.log(node.keys[i]);
        }

        if (!node.isLeaf) {
            this.traverse(node.children[node.keys.length]);
        }
    }
}
const btree = new BTree(3); // Create a B-tree of order 3

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log("In-order traversal of the B-tree:");
btree.traverse();

const result = btree.search(6);
console.log(`Search for key 6: ${result.found ? "Found" : "Not Found"}`);
In-order traversal of the B-tree:
5
6
10
12
20
30
Search for key 6: Found
