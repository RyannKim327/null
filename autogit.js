// Define a Node class to represent a node in the B-tree
class Node {
    constructor(t) {
        this.keys = [];
        this.children = [];
        this.isLeaf = true;
        this.degree = t;
    }
}

// Define a BTree class to represent the B-tree itself
class BTree {
    constructor(t) {
        this.root = new Node(t);
        this.degree = t;
    }

    // Insert a key into the B-tree
    insert(key) {
        let root = this.root;

        // If the root is full, split the root and create a new root
        if (root.keys.length === (2 * this.degree) - 1) {
            let newRoot = new Node(this.degree);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    // Insert a key into a non-full node
    insertNonFull(node, key) {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }

            node.keys[i + 1] = key;
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }

            i++;

            if (node.children[i].keys.length === (2 * this.degree) - 1) {
                this.splitChild(node, i);

                if (key > node.keys[i]) {
                    i++;
                }
            }

            this.insertNonFull(node.children[i], key);
        }
    }

    // Split child node
    splitChild(parent, index) {
        let t = this.degree;
        let child = parent.children[index];
        let newChild = new Node(t);

        newChild.isLeaf = child.isLeaf;

        for (let i = 0; i < t - 1; i++) {
            newChild.keys[i] = child.keys[i + t];
        }

        if (!child.isLeaf) {
            for (let i = 0; i < t; i++) {
                newChild.children[i] = child.children[i + t];
            }
        }

        child.keys.length = t - 1;
        child.children.length = t;

        parent.keys.splice(index, 0, child.keys.pop());
        parent.children.splice(index + 1, 0, newChild);
    }

    // Perform inorder traversal of the B-tree
    inorderTraversal(node) {
        if (node) {
            let i;
            for (i = 0; i < node.keys.length; i++) {
                if (!node.isLeaf) {
                    this.inorderTraversal(node.children[i]);
                }
                console.log(node.keys[i]);
            }

            if (!node.isLeaf) {
                this.inorderTraversal(node.children[i]);
            }
        }
    }
}

// Example usage
const bTree = new BTree(3);
bTree.insert(1);
bTree.insert(3);
bTree.insert(7);
bTree.insert(10);
bTree.insert(15);
bTree.insert(20);
bTree.insert(25);
bTree.insert(16);
bTree.insert(19);
bTree.insert(27);

bTree.inorderTraversal(bTree.root);
