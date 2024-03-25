class Node {
    constructor(degree, isLeaf) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf || true;
        this.degree = degree || 2;
    }
}

class BTree {
    constructor(degree) {
        this.root = new Node(degree, true);
        this.degree = degree;
    }

    insert(key) {
        if (this.root.keys.length === this.degree * 2 - 1) {
            let newRoot = new Node(this.degree, false);
            newRoot.children.push(this.root);
            this.root = newRoot;
            this.splitChild(newRoot, 0);
        }
        this.insertNonFull(this.root, key);
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        if (node.isLeaf) {
            node.keys.push('');
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
            if (node.children[i].keys.length === this.degree * 2 - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(parent, index) {
        let degree = this.degree;
        let child = parent.children[index];
        let newChild = new Node(degree, child.isLeaf);
        parent.children.splice(index + 1, 0, newChild);
        parent.keys.splice(index, 0, child.keys[degree - 1]);

        newChild.keys = child.keys.splice(degree);
        if (!child.isLeaf) {
            newChild.children = child.children.splice(degree);
        }
    }
}

// Example usage
let bTree = new BTree(2); // Initialize a B-tree of degree 2
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);

console.log(bTree.root); // Display the B-tree root node
