class Node {
    constructor(t, leaf) {
        this.t = t;
        this.keys = [];
        this.children = leaf ? null : [];
        this.isLeaf = leaf;
    }
}

class BTree {
    constructor(t) {
        this.root = new Node(t, true);
        this.t = t;
    }

    insert(key) {
        let root = this.root;
        
        if (root.keys.length === (2 * this.t) - 1) {
            let newRoot = new Node(this.t, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.insertNonFull(newRoot, key);
            this.root = newRoot;
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

            if (node.children[i].keys.length === (2 * this.t) - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(parent, index) {
        let t = this.t;
        let child = parent.children[index];
        let newChild = new Node(t, child.isLeaf);
        parent.keys.splice(index, 0, child.keys[t - 1]);

        for (let j = 0; j < t - 1; j++) {
            if (!child.isLeaf) {
                newChild.children.push(child.children[j + t]);
            }
            newChild.keys.push(child.keys[j + t]);
        }

        if (!child.isLeaf) {
            newChild.children.push(child.children[2 * t - 1]);
        }

        parent.children.splice(index + 1, 0, newChild);
        child.keys.length = t - 1;
        child.children = child.children.slice(0, t);
    }

    search(key) {
        let node = this.root;

        while (node) {
            let i = 0;
            while (i < node.keys.length && key > node.keys[i]) {
                i++;
            }
            if (node.keys[i] === key) {
                return true;
            }
            if (node.isLeaf) {
                return false;
            }
            node = node.children[i];
        }

        return false;
    }
}

// Example usage
let bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);

console.log(bTree.search(6)); // Output: true
console.log(bTree.search(15)); // Output: false
