class BTreeNode {
  constructor(order, leaf) {
    this.order = order; // maximum number of keys a node can have
    this.keys = []; // array of keys
    this.childPointers = []; // array of child pointers
    this.leaf = leaf; // flag indicating if node is a leaf or not
  }
}
class BTree {
  constructor(order) {
    this.root = null; // root node of the tree
    this.order = order; // maximum number of keys a node can have
  }

  insert(key) {
    // Insert a key into the tree
  }

  delete(key) {
    // Delete a key from the tree
  }

  search(key) {
    // Search for a key in the tree
  }

  print() {
    // Print the tree in-order
  }
}
insert(key) {
  if (this.root === null) {
    // Tree is empty, create a new root node
    this.root = new BTreeNode(this.order, true);
    this.root.keys.push(key);
  } else {
    if (this.root.keys.length === 2 * this.order - 1) {
      // Root node is full, so we need to split it
      const newRoot = new BTreeNode(this.order, false);

      newRoot.childPointers.push(this.root);
      this.root = newRoot;

      this.splitChild(this.root, 0);
    }

    this.insertNonFull(this.root, key);
  }
}
splitChild(parentNode, childIndex) {
  const childNode = parentNode.childPointers[childIndex];
  const newChildNode = new BTreeNode(this.order, childNode.leaf);

  parentNode.keys.splice(childIndex, 0, childNode.keys[this.order - 1]);
  parentNode.childPointers.splice(childIndex + 1, 0, newChildNode);

  newChildNode.keys = childNode.keys.splice(this.order);

  if (!childNode.leaf) {
    newChildNode.childPointers = childNode.childPointers.splice(this.order + 1);
  }
}

insertNonFull(node, key) {
  let i = node.keys.length - 1;

  if (node.leaf) {
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }

    node.keys.splice(i + 1, 0, key);
  } else {
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }

    i++;

    if (node.childPointers[i].keys.length === 2 * this.order - 1) {
      this.splitChild(node, i);

      if (key > node.keys[i]) {
        i++;
      }
    }

    this.insertNonFull(node.childPointers[i], key);
  }
}
