class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // minimum degree (defines the range for number of keys)
    this.keys = new Array(2 * t - 1);
    this.children = new Array(2 * t);
    this.leaf = leaf;
    this.keyCount = 0;
  }

  // Traverse the keys in the given range
  traverseKeys(startIndex = 0, endIndex = this.keyCount) {
    for (let i = startIndex; i < endIndex; i++) {
      console.log(this.keys[i]);
    }
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t; // minimum degree
  }

  // Search for a specific key in the tree
  search(key, node = this.root) {
    let i = 0;
    while (i < node.keyCount && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true; // key found
    }
    if (node.leaf) {
      return false; // key not found
    }
    return this.search(key, node.children[i]);
  }

  // Insert a given key into the tree
  insert(key) {
    const root = this.root;
    if (root.keyCount === 2 * this.t - 1) {
      const newNode = new BTreeNode(this.t, false);
      this.root = newNode;
      newNode.children[0] = root;
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Insert the given key into a non-full node
  insertNonFull(node, key) {
    let i = node.keyCount - 1;
    if (node.leaf) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
      node.keyCount++;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].keyCount === 2 * this.t - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Split the child node at the given index
  splitChild(parent, index) {
    const t = this.t;
    const child = parent.children[index];
    const newNode = new BTreeNode(t, child.leaf);
    parent.keyCount++;
    for (let i = parent.keyCount - 1; i > index; i--) {
      parent.keys[i] = parent.keys[i - 1];
    }
    parent.keys[index] = child.keys[t - 1];
    for (let i = parent.keyCount; i > index + 1; i--) {
      parent.children[i] = parent.children[i - 1];
    }
    parent.children[index + 1] = newNode;
    for (let i = 0; i < t - 1; i++) {
      newNode.keys[i] = child.keys[i + t];
    }
    if (!child.leaf) {
      for (let i = 0; i < t; i++) {
        newNode.children[i] = child.children[i + t];
      }
    }
    child.keyCount = t - 1;
  }
}

// Example usage
const bTree = new BTree(3); // Create a B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
console.log(bTree.search(6)); // Output: true
console.log(bTree.search(22)); // Output: false
