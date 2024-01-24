class BTreeNode {
  constructor(t, leaf) {
    // Minimum degree of the B-tree
    this.t = t;
    
    // Array to store keys
    this.keys = [];
    
    // Array to store child nodes
    this.children = [];
    
    // Flag indicating whether the node is a leaf
    this.leaf = leaf;
  }
}
class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true); // Create an empty root node
    this.t = t; // Minimum degree of the B-tree
  }
  
  // Search for a key in the B-tree
  search(key) {
    return this.searchNode(this.root, key);
  }
  
  // Recursive search helper function
  searchNode(node, key) {
    let i = 0;
    
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    
    if (node.keys[i] === key) {
      return node;
    }
    
    if (node.leaf) {
      return null;
    }
    
    return this.searchNode(node.children[i], key);
  }
  
  // Insert a key into the B-tree
  insert(key) {
    let root = this.root;
    
    // If the root is full, split it
    if (root.keys.length === (2 * this.t) - 1) {
      let newNode = new BTreeNode(this.t, false);
      
      newNode.children.push(root);
      this.root = newNode;
      
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }
  
  // Split the child node at the given index of the parent node
  splitChild(parent, index) {
    let newNode = parent.children[index];
    let newChildNode = new BTreeNode(this.t, newNode.leaf);
    
    parent.keys.splice(index, 0, newNode.keys[this.t - 1]);
    parent.children.splice(index + 1, 0, newChildNode);
    
    newChildNode.keys = newNode.keys.splice(this.t, this.t - 1);
    
    if (!newNode.leaf) {
      newChildNode.children = newNode.children.splice(this.t, this.t);
    }
  }
  
  // Insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    
    if (node.leaf) {
      node.keys.push(null);
      
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
}
// Create a new B-tree with minimum degree 3
const bTree = new BTree(3);

// Insert keys into the B-tree
bTree.insert(10);
bTree.insert(20);
bTree.insert(30);

// Search for a key in the B-tree
console.log(bTree.search(20)); // Output: BTreeNode { ... }
console.log(bTree.search(40)); // Output: null
