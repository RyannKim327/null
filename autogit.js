class BTreeNode {
  constructor(order, leaf) {
    this.order = order; // Maximum number of keys in a node
    this.keys = []; // Array to store keys
    this.childPointers = []; // Array to store child pointers
    this.isLeaf = leaf; // Flag to indicate if node is a leaf or not
  }
}
class BTree {
  constructor(order) {
    this.root = null; // Root node of the B-tree
    this.order = order; // Maximum number of keys in a node
  }

  // Define other B-tree operations (e.g., insert, delete, search) here
}
  insert(key) {
    if (this.root === null) {
      // Tree is empty, create a new root node
      this.root = new BTreeNode(this.order, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === this.order * 2 - 1) {
        // Root node is full, split it and create a new root
        const oldRoot = this.root;
        this.root = new BTreeNode(this.order, false);
        this.root.childPointers.push(oldRoot);
        this.splitChild(this.root, 0);
        this.insertNonFull(this.root, key);
      } else {
        // Root node is not full, insert key recursively
        this.insertNonFull(this.root, key);
      }
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Node is a leaf, insert key at the correct position
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      // Node is not a leaf, find the child to insert the key recursively
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }

      i++;

      if (node.childPointers[i].keys.length === this.order * 2 - 1) {
        // Child is full, split it first
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.childPointers[i], key);
    }
  }
  splitChild(parent, index) {
    const childNode = parent.childPointers[index];
    const newNode = new BTreeNode(this.order, childNode.isLeaf);

    parent.keys.splice(index, 0, childNode.keys[this.order - 1]);
    parent.childPointers.splice(index + 1, 0, newNode);

    newNode.keys = childNode.keys.splice(this.order, this.order - 1);
    if (!childNode.isLeaf) {
      newNode.childPointers = childNode.childPointers.splice(this.order, this.order);
    }
  }
