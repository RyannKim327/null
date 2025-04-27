class BTreeNode {
    keys: number[]; // Array to hold keys
    children: BTreeNode[]; // Array to hold child nodes
    isLeaf: boolean; // True if node is leaf
    maxKeys: number; // Maximum number of keys allowed in this node

    constructor(maxKeys: number, isLeaf: boolean) {
        this.maxKeys = maxKeys;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }

    isFull(): boolean {
        return this.keys.length === this.maxKeys;
    }

    findIndex(key: number): number {
        let index = 0;
        while (index < this.keys.length && this.keys[index] < key) {
            index++;
        }
        return index;
    }
}

class BTree {
    root: BTreeNode;
    maxKeys: number;

    constructor(maxKeys: number) {
        this.root = new BTreeNode(maxKeys, true);
        this.maxKeys = maxKeys;
    }

    search(key: number): BTreeNode | null {
        return this.searchRecursively(this.root, key);
    }

    private searchRecursively(node: BTreeNode, key: number): BTreeNode | null {
        let index = node.findIndex(key);

        if (index < node.keys.length && node.keys[index] === key) {
            return node; // Key found
        }

        // If this node is a leaf, key is not found
        if (node.isLeaf) {
            return null;
        }

        // Recur to the child
        return this.searchRecursively(node.children[index], key);
    }

    insert(key: number): void {
        const root = this.root;

        if (root.isFull()) {
            const newRoot = new BTreeNode(this.maxKeys, false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }

        this.insertNonFull(this.root, key);
    }

    private splitChild(parent: BTreeNode, index: number): void {
        const fullChild = parent.children[index];
        const newChild = new BTreeNode(this.maxKeys, fullChild.isLeaf);
        
        // Move the last (maxKeys/2) keys from fullChild to newChild
        const medianKey = fullChild.keys[Math.floor(fullChild.keys.length / 2)];
        parent.keys.splice(index, 0, medianKey); // Insert median key in the parent
        parent.children.splice(index + 1, 0, newChild); // New child becomes parent’s child

        for (let i = Math.floor(fullChild.keys.length / 2) + 1; i < fullChild.keys.length; i++) {
            newChild.keys.push(fullChild.keys[i]);
        }
        fullChild.keys.splice(Math.floor(fullChild.keys.length / 2)); // Remove keys from fullChild

        if (!fullChild.isLeaf) {
            for (let i = Math.floor(fullChild.children.length / 2) + 1; i < fullChild.children.length; i++) {
                newChild.children.push(fullChild.children[i]);
            }
            fullChild.children.splice(Math.floor(fullChild.children.length / 2));
        }
    }

    private insertNonFull(node: BTreeNode, key: number): void {
        let index = node.findIndex(key);
        
        if (node.isLeaf) {
            node.keys.splice(index, 0, key); // Insert key in sorted order
        } else {
            // If it is not a leaf, go down to the child
            if (node.children[index].isFull()) {
                this.splitChild(node, index);
                if (key > node.keys[index]) {
                    index++;
                }
            }
            this.insertNonFull(node.children[index], key);
        }
    }
}
const bTree = new BTree(3); // Create a B-tree with max 3 keys per node
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

const searchResult = bTree.search(6); // Should return the node containing 6
console.log(searchResult ? 'Found' : 'Not Found');
