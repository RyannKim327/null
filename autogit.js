// B-tree Node constructor
function Node(keys, children, isLeaf) {
    this.keys = keys || [];
    this.children = children || [];
    this.isLeaf = isLeaf;
}

// B-tree constructor
function BTree(order) {
    this.root = new Node();
    this.order = order;
}

BTree.prototype.insert = function(key) {
    // Implement B-tree insertion algorithm here
    // Start at the root and traverse the tree to find the correct position for the new key
    // Split nodes if necessary to maintain B-tree properties
    // Update the root if necessary
};

BTree.prototype.search = function(key) {
    // Implement B-tree search algorithm here
    // Start at the root and traverse the tree to find the key
    // Return true if the key is found, false otherwise
};

// Example usage
var btree = new BTree(3); // Create a new B-tree with order 3
btree.insert(5);
btree.insert(10);
btree.insert(20);
console.log(btree.search(10)); // Output: true
console.log(btree.search(15)); // Output: false
