class Node {
    constructor(isLeaf) {
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(degree) {
        this.root = new Node(true);
        this.degree = degree;
    }

    insert(key) {
        let root = this.root;

        if (root.keys.length === 2 * this.degree - 1) {
            let newRoot = new Node(false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

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
            if (node.children[i].keys.length === 2 * this.degree - 1) {
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
        let newChild = new Node(child.isLeaf);
        parent.keys.splice(index, 0, child.keys[degree - 1]);
        parent.children.splice(index + 1, 0, newChild);
        newChild.keys = child.keys.splice(degree);
        
        if (!child.isLeaf) {
            newChild.children = child.children.splice(degree);
        }
    }

    search(node, key) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        if (node.keys[i] === key) {
            return node;
        }
        if (node.isLeaf) {
            return null;
        }
        return this.search(node.children[i], key);
    }
}

// Example usage:
let btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);

console.log(btree.search(btree.root, 5)); // Output: Node { isLeaf: true, keys: [ 5 ], children: [] }
