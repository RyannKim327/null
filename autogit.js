// Node class represents a single node in the B-tree
class Node {
    constructor(t, leaf) {
        this.t = t; // Minimum degree
        this.keys = []; // Array to store keys
        this.children = []; // Array to store child nodes
        this.leaf = leaf; // True if node is a leaf, false otherwise
    }
}

// BTree class represents the B-tree data structure
class BTree {
    constructor(t) {
        this.root = null;
        this.t = t; // Minimum degree
    }

    // Function to insert a key into the B-tree
    insert(key) {
        if (this.root === null) {
            this.root = new Node(this.t, true);
            this.root.keys.push(key);
        } else {
            // If root is full, grow the tree
            if (this.root.keys.length === 2 * this.t - 1) {
                let newRoot = new Node(this.t, false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
            }
            this.insertNonFull(this.root, key);
        }
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        
        if (node.leaf) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            while(i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if(node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if(key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }
    
    splitChild(parent, index) {
        let t = this.t;
        let node = parent.children[index];
        let left = new Node(t, node.leaf);
        let right = new Node(t, node.leaf);
        
        // Transfer keys to the new nodes
        for(let i = 0; i < t - 1; i++) {
            left.keys[i] = node.keys[i];
            right.keys[i] = node.keys[i + t];
        }
        
        // Transfer children to the new nodes if node is not a leaf
        if(!node.leaf) {
            for(let i = 0; i < t; i++) {
                left.children[i] = node.children[i];
                right.children[i] = node.children[i + t];
            }
        }
        
        // Update parent node
        for(let i = parent.keys.length; i > index; i--) {
            parent.children[i + 1] = parent.children[i];
        }
        parent.children[index] = left;
        parent.children[index + 1] = right;
        
        for(let i = parent.keys.length; i > index; i--) {
            parent.keys[i] = parent.keys[i - 1];
        }
        parent.keys[index] = node.keys[t - 1];
    }
}

// Example usage
let btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log(btree);
