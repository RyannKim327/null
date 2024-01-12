class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t; // Minimum degree
    this.keys = []; // Array of keys
    this.child = []; // Array of child nodes
    this.leaf = leaf; // Is this node a leaf?
  }
}
class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t; // Minimum degree
  }
}
BTree.prototype.insert = function (k) {
  const root = this.root;
  if (root.keys.length === (2 * this.t) - 1) {
    const newRoot = new BTreeNode(this.t, false);
    this.root = newRoot;
    newRoot.child[0] = root;
    this.splitChild(newRoot, 0);
    this.insertNonFull(newRoot, k);
  } else {
    this.insertNonFull(root, k);
  }
};

BTree.prototype.insertNonFull = function (node, k) {
  let i = node.keys.length - 1;
  if (node.leaf) {
    while (i >= 0 && k < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, k);
  } else {
    while (i >= 0 && k < node.keys[i]) {
      i--;
    }
    i++;
    if (node.child[i].keys.length === (2 * this.t) - 1) {
      this.splitChild(node, i);
      if (k > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.child[i], k);
  }
};

BTree.prototype.splitChild = function (node, i) {
  const t = this.t;
  const y = node.child[i];
  const z = new BTreeNode(t, y.leaf);
  node.child.splice(i + 1, 0, z);
  node.keys.splice(i, 0, y.keys[t - 1]);
  z.keys = y.keys.splice(t, y.keys.length - t);
  if (!y.leaf) {
    z.child = y.child.splice(t, y.child.length - t);
  }
};
BTree.prototype.search = function (k, node = this.root) {
  let i = 0;
  while (i < node.keys.length && k > node.keys[i]) {
    i++;
  }
  if (node.keys[i] === k) {
    return node;
  } else if (node.leaf) {
    return null;
  } else {
    return this.search(k, node.child[i]);
  }
};
const bTree = new BTree(3); // Create a B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
const searchResult = bTree.search(20);
console.log(searchResult); // Output: BTreeNode {t: 3, keys: [20], child: [], leaf: true}
