class Node {
    constructor(t, leaf) {
        this.t = t; // Minimum degree
        this.keys = []; // Array of keys
        this.children = []; // Array of child nodes
        this.leaf = leaf; // Is node a leaf or not
    }

    // Helper function to find key location
    findKey(key) {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }
        return i;
    }

    // Recursive function to insert a new key in the subtree rooted with this node
    insertNonFull(key) {
        let i = this.keys.length - 1;
        
        if (this.leaf) {
            while (i >= 0 && key < this.keys[i]) {
                this.keys[i + 1] = this.keys[i];
                i--;
            }
            this.keys[i + 1] = key;
        } else {
            while (i >= 0 && key < this.keys[i]) {
                i--;
            }
            if (this.children[i + 1].keys.length === 2 * this.t - 1) {
                this.splitChild(i + 1, this.children[i + 1]);
                if (key > this.keys[i + 1]) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key);
        }
    }

    // Helper function to split the child
    splitChild(i, y) {
        let z = new Node(y.t, y.leaf);
        z.keys = y.keys.splice(this.t, y.keys.length - this.t);
        
        if (!y.leaf) {
            z.children = y.children.splice(this.t, y.children.length - this.t);
        }

        this.keys.splice(i, 0, y.keys[this.t - 1]);
        this.children.splice(i + 1, 0, z);
    }

    // Function to traverse all nodes in a subtree
    traverse() {
        let result = [];
        for (let i = 0; i < this.keys.length; i++) {
            if (!this.leaf) {
                this.children[i].traverse();
            }
            result.push(this.keys[i]);
        }
        if (!this.leaf) {
            this.children[i].traverse();
        }
        return result;
    }
}

class BTree {
    constructor(t) {
        this.root = new Node(t, true);
        this.t = t; // Minimum degree
    }

    // Function to insert a key
    insert(key) {
        let root = this.root;
        
        if (root.keys.length === 2 * this.t - 1) {
            let s = new Node(this.t, false);
            s.children.push(root);
            s.splitChild(0, root);
            let i = 0;
            if (s.keys[0] < key) {
                i++;
            }
            s.children[i].insertNonFull(key);
            this.root = s;
        } else {
            root.insertNonFull(key);
        }
    }

    // Function to search a key in the tree
    search(key) {
        return this.searchHelper(this.root, key);
    }

    searchHelper(node, key) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        
        if (node.keys[i] === key) {
            return true;
        }
        
        if (node.leaf) {
            return false;
        }
        
        return this.searchHelper(node.children[i], key);
    }

    // Function to traverse the tree
    traverse() {
        return this.root.traverse();
    }
}

// Example usage
let bTree = new BTree(2);
bTree.insert(1);
bTree.insert(3);
bTree.insert(5);
bTree.insert(7);
bTree.insert(9);

console.log(bTree.traverse()); // [1, 3, 5, 7, 9]
console.log(bTree.search(5)); // true
console.log(bTree.search(8)); // false
