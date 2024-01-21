class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // minimum degree
    this.leaf = leaf; // boolean flag indicating if the node is a leaf
    this.keys = []; // array to store keys
    this.children = []; // array to store child pointers
  }
}
class BTree {
  constructor(t) {
    this.root = null; // root node of the B-tree
    this.t = t; // minimum degree
  }

  // Insert a key in the B-tree
  insert(key) {
    if (this.root === null) {
      // Tree is empty, create a new root node
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      // If root is full, split it and create a new root
      if (this.root.keys.length === 2 * this.t - 1) {
        const newRoot = new BTreeNode(this.t, false);
        newRoot.children.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  // Insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      // If the node is a leaf, insert the key into the sorted position
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      // If the node is not a leaf, find the appropriate child to insert the key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      // If the child is full, split it
      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i, node.children[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Split a child node
  splitChild(parent, index, child) {
    const newNode = new BTreeNode(this.t, child.leaf);
    parent.keys.splice(index, 0, child.keys[this.t - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = child.keys.splice(this.t, this.t - 1);
    if (!child.leaf) {
      newNode.children = child.children.splice(this.t, this.t);
    }
  }

  // Perform an inorder traversal of the B-tree
  inorder(node = this.root) {
    if (node !== null) {
      for (let i = 0; i < node.keys.length; i++) {
        this.inorder(node.children[i]);
        console.log(node.keys[i]);
      }
      this.inorder(node.children[node.keys.length]);
    }
  }
}
// Create a B-tree with a minimum degree of 3
const btree = new BTree(3);

// Insert some keys
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(15);
btree.insert(30);

// Perform an inorder traversal to print the keys
btree.inorder();
