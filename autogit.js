// Define the B-tree node class
class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t; // Minimum degree
    this.keys = []; // Array to store keys
    this.children = []; // Array to store child nodes
    this.leaf = leaf; // Is node a leaf or not
  }
}

// Define the B-tree class
class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true); // Initialize an empty root node
    this.t = t; // Minimum degree
  }

  // Function to insert a key into the B-tree
  insert(key) {
    let root = this.root;
    if (root.keys.length === (2 * this.t) - 1) {
      let newRoot = new BTreeNode(this.t, false);
      newRoot.children.push(root);
      this.root = newRoot;
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Helper function to insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
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

  // Helper function to split a child node
  splitChild(parent, i) {
    let t = this.t;
    let child = parent.children[i];
    let newChild = new BTreeNode(t, child.leaf);
    parent.keys.splice(i, 0, child.keys[t - 1]);
    parent.children.splice(i + 1, 0, newChild);
    newChild.keys = child.keys.slice(t, 2 * t - 1);
    child.keys.length = t - 1;
    if (!child.leaf) {
      newChild.children = child.children.slice(t, 2 * t);
      child.children.length = t;
    }
  }

  // Function to search for a key in the B-tree
  search(key) {
    return this.searchNode(this.root, key);
  }

  // Helper function to search for a key in a specific node
  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (i < node.keys.length && key === node.keys[i]) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.searchNode(node.children[i], key);
    }
  }
}

// Example usage
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
console.log(bTree.search(10)); // Output: true
console.log(bTree.search(15)); // Output: false
