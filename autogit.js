class BTreeNode {
  constructor(t, isLeaf = true) {
    this.t = t; // minimum degree of the B-tree
    this.keys = []; // array to store keys
    this.children = []; // array to store child nodes
    this.isLeaf = isLeaf; // true if the node is a leaf, false otherwise
  }
}
class BTree {
  constructor(t) {
    this.root = null;
    this.t = t; // minimum degree of the B-tree
  }
}
BTree.prototype.insert = function (key) {
  if (!this.root) {
    // Tree is empty, create a new root node
    this.root = new BTreeNode(this.t, true);
    this.root.keys.push(key);
  } else {
    if (this.root.keys.length === (2 * this.t) - 1) {
      // Root is full, split it
      const newNode = new BTreeNode(this.t, false);
      newNode.children.push(this.root);

      this.splitChild(newNode, 0, this.root);

      let i = 0;
      if (newNode.keys[0] < key)
        i++;
      this.insertNonFull(newNode.children[i], key);

      this.root = newNode;
    } else {
      // Root is not full, insert directly into root
      this.insertNonFull(this.root, key);
    }
  }
};

BTree.prototype.insertNonFull = function (node, key) {
  let i = node.keys.length - 1;

  if (node.isLeaf) {
    // Find the right position to insert the key
    while (i >= 0 && node.keys[i] > key) {
      node.keys[i + 1] = node.keys[i];
      i--;
    }
    node.keys[i + 1] = key;
  } else {
    // Find the child node to insert the key recursively
    while (i >= 0 && node.keys[i] > key)
      i--;

    if (node.children[i + 1].keys.length === (2 * this.t) - 1) {
      // Child is full, split it
      this.splitChild(node, i + 1, node.children[i + 1]);

      if (node.keys[i + 1] < key)
        i++;
    }
    this.insertNonFull(node.children[i + 1], key);
  }
};

BTree.prototype.splitChild = function (parent, index, child) {
  const newNode = new BTreeNode(this.t, child.isLeaf);
  parent.keys.splice(index, 0, child.keys[this.t - 1]);
  parent.children.splice(index + 1, 0, newNode);

  newNode.keys = child.keys.splice(this.t, this.t - 1);
  if (!child.isLeaf)
    newNode.children = child.children.splice(this.t, this.t);
};
BTree.prototype.search = function (key) {
  return this.searchNode(this.root, key);
};

BTree.prototype.searchNode = function (node, key) {
  let i = 0;
  while (i < node.keys.length && key > node.keys[i])
    i++;

  if (node.keys[i] === key)
    return node;

  if (node.isLeaf)
    return null;

  return this.searchNode(node.children[i], key);
};
const btree = new BTree(3); // Create a B-tree with minimum degree 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
const node = btree.search(10);
console.log(node.keys); // Output: [10]
