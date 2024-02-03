class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }

  // Insert a key into the current node
  insertNonFull(key) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      this.keys.splice(i + 1, 0, key);
    } else {
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      i++;

      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i);

        if (key > this.keys[i]) {
          i++;
        }
      }
      this.children[i].insertNonFull(key);
    }
  }

  // Split the child node into two
  splitChild(i) {
    const child = this.children[i];
    const newNode = new BTreeNode(child.t, child.leaf);

    this.keys.splice(i, 0, child.keys[child.keys.length - 1]);
    this.children.splice(i + 1, 0, newNode);

    newNode.keys = child.keys.splice(child.keys.length / 2);
    if (!child.leaf) {
      newNode.children = child.children.splice(child.children.length / 2);
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
    } else if (this.leaf) {
      return null;
    } else {
      return this.children[i].search(key);
    }
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  // Insert a key into the tree
  insert(key) {
    const root = this.root;
    if (root.keys.length === 2 * this.t - 1) {
      const newRoot = new BTreeNode(this.t, false);
      newRoot.children.push(root);
      this.root = newRoot;
      newRoot.splitChild(0);
      newRoot.insertNonFull(key);
    } else {
      root.insertNonFull(key);
    }
  }

  // Search for a key in the tree
  search(key) {
    return this.root.search(key);
  }
}
// Create a B-tree with a degree of 3
const tree = new BTree(3);

// Insert some keys
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(6);
tree.insert(12);
tree.insert(30);

// Search for a key
const result = tree.search(6);
console.log(result ? "Key found" : "Key not found"); // Output: "Key found"
