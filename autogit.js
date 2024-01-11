// Define a class for the B-tree node
class BTreeNode {
  constructor(t, leaf) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf || false;
    this.t = t;
  }

  // Insert a key into the node
  insertNonFull(key) {
    let i = this.keys.length - 1;
    if (this.leaf) {
      while (i >= 0 && this.keys[i] > key) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }
      this.keys[i + 1] = key;
    } else {
      while (i >= 0 && this.keys[i] > key) {
        i--;
      }
      if (this.children[i + 1].keys.length === 2 * this.t - 1) {
        this.splitChild(i + 1, this.children[i + 1]);
        if (this.keys[i + 1] < key) {
          i++;
        }
      }
      this.children[i + 1].insertNonFull(key);
    }
  }

  // Split a child node
  splitChild(i, y) {
    const z = new BTreeNode(y.t, y.leaf);
    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys[y.keys.length - 1]);
    z.keys = y.keys.splice(y.keys.length / 2);
    if (!y.leaf) {
      z.children = y.children.splice(y.children.length / 2 + 1);
    }
  }

  // Search for a key in the tree
  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }
    if (this.keys[i] === key) {
      return this;
    }
    if (this.leaf) {
      return null;
    }
    return this.children[i].search(key);
  }

  // Print the tree in-order
  printInOrder() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        this.children[i].printInOrder();
      }
      console.log(this.keys[i]);
    }
    if (!this.leaf) {
      this.children[i].printInOrder();
    }
  }
}

// Define a class for the B-tree
class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  // Insert a key into the tree
  insert(key) {
    const root = this.root;
    if (root.keys.length === 2 * this.t - 1) {
      const s = new BTreeNode(this.t);
      this.root = s;
      s.children.push(root);
      s.splitChild(0, root);
      s.insertNonFull(key);
    } else {
      root.insertNonFull(key);
    }
  }

  // Search for a key in the tree
  search(key) {
    return this.root.search(key);
  }

  // Print the tree in-order
  printInOrder() {
    if (this.root !== null) {
      this.root.printInOrder();
    }
  }
}
// Create a B-tree with t = 3
const bTree = new BTree(3);

// Insert some keys
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(15);
bTree.insert(25);

// Search for a key
const result = bTree.search(15);
console.log(result);  // BTreeNode object

// Print the tree in-order
bTree.printInOrder(); // 5 10 15 20 25
