class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    degree: number; // Minimum degree (defines the range for the number of keys)

    constructor(degree: number, isLeaf: boolean) {
        this.degree = degree;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}
class BTree {
    root: BTreeNode;
    degree: number; // Minimum degree

    constructor(degree: number) {
        this.root = new BTreeNode(degree, true);
        this.degree = degree;
    }

    // Function to traverse the B-tree
    traverse(node: BTreeNode | null): void {
        if (node) {
            let i;
            const n = node.keys.length;

            for (i = 0; i < n; i++) {
                // Print the keys
                console.log(node.keys[i]);

                // If it's not a leaf, traverse the child
                if (!node.isLeaf) {
                    this.traverse(node.children[i]);
                }
            }

            // Traverse the last child
            if (!node.isLeaf) {
                this.traverse(node.children[i]);
            }
        }
    }

    // Function to insert a new key
    insert(key: number): void {
        const root = this.root;

        // If root is full, then tree grows in height
        if (root.keys.length === (2 * this.degree - 1)) {
            const newNode = new BTreeNode(this.degree, false);
            newNode.children.push(root);
            this.splitChild(newNode, 0);
            this.root = newNode;
            this.insertNonFull(newNode, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    // Insert a key into a subtree rooted with this node
    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;

        // If this is a leaf node
        if (node.isLeaf) {
            // Find the location of new key to be inserted
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key); // Insert the new key in sorted order
        } else {
            // Find the child which is going to have the new key
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            // If the found child is full, then split it
            if (node.children[i].keys.length === (2 * this.degree - 1)) {
                this.splitChild(node, i);
                
                // After split, the middle key of node.key is moved up and
                // we need to check which of the two children to insert the key
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key); // Recur
        }
    }

    // Split the child of given node. `i` is index of child to be split.
    private splitChild(parentNode: BTreeNode, i: number): void {
        const degree = this.degree;
        const fullChild = parentNode.children[i];
        const newChild = new BTreeNode(degree, fullChild.isLeaf);

        // Move half the keys to the newChild
        for (let j = 0; j < degree - 1; j++) {
            newChild.keys.push(fullChild.keys[j + degree]);
        }
        if (!fullChild.isLeaf) {
            for (let j = 0; j < degree; j++) {
                newChild.children.push(fullChild.children[j + degree]);
            }
        }

        parentNode.children.splice(i + 1, 0, newChild); // Add new child to parent
        parentNode.keys.splice(i, 0, fullChild.keys[degree - 1]); // Move middle key to parent
        fullChild.keys = fullChild.keys.slice(0, degree - 1); // Reduce keys in the full child
    }
}
const bTree = new BTree(3); // Create a B-tree with minimum degree 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

// Traversing the B-tree
console.log("Traversal of the B-tree:");
bTree.traverse(bTree.root);
