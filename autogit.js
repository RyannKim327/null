class Node {
    constructor(order, leaf) {
        this.order = order; // Maximum number of keys the node can hold
        this.keys = []; // Array of keys
        this.children = []; // Array of child nodes
        this.leaf = leaf; // Whether the node is a leaf or not
    }
}
class BTree {
    constructor(order) {
        this.root = null; // Initialize the root node
        this.order = order; // Maximum number of keys each node can hold
    }
}
BTree.prototype.insert = function(key) {
    if (this.root === null) { // If the tree is empty
        this.root = new Node(this.order, true); // Create the root node as a leaf
        this.root.keys.push(key); // Insert the key
    } else {
        if (this.root.keys.length === this.order - 1) { // If the root is full
            const newNode = new Node(this.order, false); // Create a new root node
            newNode.children.push(this.root); // Make the old root a child of the new root
            this.splitChild(newNode, 0, this.root); // Split the old root and move 1 key to the new root
            this.root = newNode; // Set the new root
        }
        this.insertNonFull(this.root, key); // Insert the key into the non-full root node
    }
};
BTree.prototype.insertNonFull = function(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) { // If the node is a leaf
        while (i >= 0 && key < node.keys[i]) {
            i--;
        }
        node.keys.splice(i + 1, 0, key); // Insert the key at the correct position
    } else { // If the node is not a leaf
        while (i >= 0 && key < node.keys[i]) {
            i--;
        }
        i++;
        if (node.children[i].keys.length === this.order - 1) { // If the child is full
            this.splitChild(node, i, node.children[i]); // Split the child node
            if (key > node.keys[i]) {
                i++;
            }
        }
        this.insertNonFull(node.children[i], key); // Recursively insert the key
    }
};
BTree.prototype.splitChild = function(parent, index, child) {
    const newNode = new Node(this.order, child.leaf); // Create a new node
    parent.keys.splice(index, 0, child.keys[this.order - 1]); // Move the median key of the child to the parent
    parent.children.splice(index + 1, 0, newNode); // Add the new node as a child of the parent

    newNode.keys = child.keys.splice(this.order, this.order - 1); // Move the right half of the keys to the new node
    if (!child.leaf) {
        newNode.children = child.children.splice(this.order, this.order); // Move the right half of the children to the new node
    }
};
