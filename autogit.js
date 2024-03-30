class BTreeNode {
  constructor(degree, leaf = true) {
    this.degree = degree;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(degree) {
    this.root = new BTreeNode(degree, true);
    this.degree = degree;
  }

  // Search key in the B-tree
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (i < node.keys.length && key === node.keys[i]) {
      return true;
    }
    if (node.leaf) {
      return false;
    } else {
      return this.searchNode(node.children[i], key);
    }
  }

  // Insert key into the B-tree
  insert(key) {
    let root = this.root;
    if (root.keys.length === (2 * this.degree) - 1) {
      let newRoot = new BTreeNode(this.degree, false);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.root = newRoot;
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      node.keys.push('');
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
      if (node.children[i].keys.length === (2 * this.degree) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(node, i) {
    let newChild = new BTreeNode(this.degree, node.children[i].leaf);
    let splitKey = node.children[i].keys[this.degree - 1];
    newChild.keys = node.children[i].keys.splice(this.degree);
    if (!node.children[i].leaf) {
      newChild.children = node.children[i].children.splice(this.degree);
    }
    node.keys.splice(i, 0, splitKey);
    node.children.splice(i + 1, 0, newChild);
  }
}

// Example usage
const bTree = new BTree(2); // Create a B-tree with degree 2
bTree.insert(1);
bTree.insert(3);
bTree.insert(5);
console.log(bTree.search(3)); // Output: true
console.log(bTree.search(7)); // Output: false
