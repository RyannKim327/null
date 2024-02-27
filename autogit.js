// B-tree node constructor
function Node(t, leaf) {
    this.t = t; // Minimum degree (defines the range for number of keys)
    this.keys = []; // An array of keys
    this.children = [];
    this.leaf = leaf; // Is true when node is leaf, else false
}

// B-tree constructor
function BTree(t) {
    this.root = null; // Initialize with an empty root node
    this.t = t; // Minimum degree of the B-tree
}

// Helper function to search a key in subtree rooted with this node
Node.prototype.search = function(key) {
    // Find the first key greater than or equal to key
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
        i++;
    }

    // If the found key is equal to the input key, return this node
    if (this.keys[i] === key) {
        return this;
    }

    // If this is a leaf node, return null
    if (this.leaf) {
        return null;
    }

    // Otherwise, recursively search in the appropriate child node
    return this.children[i].search(key);
};

// Insert a key into the B-tree
BTree.prototype.insert = function(key) {
    // If tree is empty
    if (this.root === null) {
        this.root = new Node(this.t, true);
        this.root.keys.push(key);
    } else {
        // If the root is full, a new node must be created
        if (this.root.keys.length === 2 * this.t - 1) {
            let newRoot = new Node(this.t, false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            let i = 0;
            if (newRoot.keys[0] < key) {
                i++;
            }
            newRoot.children[i].insert(key);
            this.root = newRoot;
        } else {
            this.root.insert(key);
        }
    }
};

// Split the child node of this node
Node.prototype.splitChild = function(parent, index) {
    let t = this.t;
    let child = parent.children[index];
    let newChild = new Node(t, child.leaf);
    
    for (let i = 0; i < t - 1; i++) {
        newChild.keys[i] = child.keys[i + t];
    }
    
    if (!child.leaf) {
        for (let i = 0; i < t; i++) {
            newChild.children[i] = child.children[i + t];
        }
    }
    
    for (let i = this.keys.length; i > index; i--) {
        parent.children[i + 1] = parent.children[i];
    }
    
    parent.children[index + 1] = newChild;
    
    for (let i = this.keys.length - 1; i >= index; i--) {
        parent.keys[i + 1] = parent.keys[i];
    }
    
    parent.keys[index] = child.keys[t - 1];
    
    child.keys.length = t - 1;
    
    parent.keys.length++;
};

// Example usage
let bTree = new BTree(3); // Create a B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);

// You can add more insert operations to test the B-tree implementation

console.log(bTree);

