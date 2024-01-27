class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // Minimum degree (defines the number of keys the node can contain)
    this.keys = []; // Array to store keys
    this.childPointers = []; // Array to store child pointers
    this.leaf = leaf; // Boolean value indicating whether this node is a leaf
  }
}
class BTree {
  constructor(t) {
    this.root = null; // Initialize an empty root node
    this.t = t; // Minimum degree (defines the number of keys the nodes can contain)
  }

  insert(key) {
    if (this.root === null) {
      // If the tree is empty, create a new root node and set it as the root
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === (2 * this.t) - 1) {
        // If the root is full, create a new empty root node and split the current root
        const newRoot = new BTreeNode(this.t, false);
        newRoot.childPointers.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      // If the node is a leaf, insert the key at the correct position
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      // If the node is not a leaf, find the child to insert the key recursively
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.childPointers[i].keys.length === (2 * this.t) - 1) {
        // If the child is full, split it before inserting
        this.splitChild(node, i, node.childPointers[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.childPointers[i], key);
    }
  }

  splitChild(parent, index, child) {
    const newNode = new BTreeNode(this.t, child.leaf);
    parent.keys.splice(index, 0, child.keys[this.t - 1]);

    newNode.keys = child.keys.splice(this.t, this.t - 1);

    if (!child.leaf) {
      newNode.childPointers = child.childPointers.splice(this.t, this.t);
    }

    parent.childPointers.splice(index + 1, 0, newNode);
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
  
    if (node.keys[i] === key) {
      return true; // Key found
    }
    
    if (node.leaf) {
      return false; // Key not found
    }
    
    return this.searchNode(node.childPointers[i], key);
  }

  display() {
    this.displayNode(this.root);
  }

  displayNode(node) {
    console.log(node.keys);

    if (!node.leaf) {
      node.childPointers.forEach((child) => this.displayNode(child));
    }
  }
}
const bTree = new BTree(3); // Create a B-tree with a minimum degree of 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(30);
bTree.insert(40);
bTree.insert(50);
bTree.insert(60);
bTree.insert(70);

console.log(bTree.search(30)); // Output: true

bTree.display();
