class BTreeNode {
  constructor(order, leaf) {
    this.order = order;
    this.keys = [];
    this.child = [];
    this.leaf = leaf;
  }
}
class BTree {
  constructor(order) {
    this.root = null;
    this.order = order;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new BTreeNode(this.order, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === (2 * this.order) - 1) { // If root is full
        let newRoot = new BTreeNode(this.order, false);
        newRoot.child.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

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
      if (node.child[i].keys.length === (2 * this.order) - 1) { // If child is full
        this.splitChild(node, i, node.child[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.child[i], key);
    }
  }

  splitChild(parent, index, child) {
    let newNode = new BTreeNode(this.order, child.leaf);
    parent.keys.splice(index, 0, child.keys[this.order - 1]);
    parent.child.splice(index + 1, 0, newNode);
    newNode.keys = child.keys.splice(this.order, child.keys.length);
    if (!child.leaf) {
      newNode.child = child.child.splice(this.order, child.child.length);
    }
  }

  search(key, node) {
    if (node === undefined) {
      node = this.root;
    }
    for (let i = 0; i < node.keys.length; i++) {
      if (key === node.keys[i]) {
        return true;
      }
      if (key < node.keys[i]) {
        if (node.leaf) {
          return false;
        }
        return this.search(key, node.child[i]);
      }
    }
    if (node.leaf) {
      return false;
    }
    return this.search(key, node.child[node.keys.length]);
  }
}
let bTree = new BTree(3); // Create a B-tree object with order 3
bTree.insert(10); // Insert a key
bTree.insert(20);
bTree.insert(30);
bTree.search(10); // Search for a key (returns true or false)
bTree.search(40);
