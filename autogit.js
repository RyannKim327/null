class BTreeNode {
  constructor(order, leaf) {
    this.order = order; // maximum number of keys this node can hold
    this.keys = []; // array to store keys
    this.child = []; // array to store child nodes
    this.leaf = leaf; // indicates whether this node is a leaf node
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true); // initialize an empty tree with a root node
    this.order = order; // maximum number of keys in each node
  }
}
BTree.prototype.insert = function (key) {
  let root = this.root;
  if (root.keys.length === this.order - 1) {
    // tree is full, split the root node
    let newNode = new BTreeNode(this.order, false);
    this.root = newNode;
    newNode.child[0] = root;
    this.splitChild(newNode, 0, root);
    this.insertNonFull(newNode, key);
  } else {
    this.insertNonFull(root, key);
  }
};

BTree.prototype.insertNonFull = function (node, key) {
  let i = node.keys.length - 1;
  if (node.leaf) {
    // if node is a leaf, insert key at the correct position
    while (i >= 0 && key < node.keys[i]) {
      node.keys[i + 1] = node.keys[i];
      i--;
    }
    node.keys[i + 1] = key;
  } else {
    // if node is not a leaf, find the child to insert the key
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;
    if (node.child[i].keys.length === this.order - 1) {
      // child node is full, split it
      this.splitChild(node, i, node.child[i]);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.child[i], key);
  }
};

BTree.prototype.splitChild = function (parent, index, child) {
  let newNode = new BTreeNode(this.order, child.leaf);
  parent.keys.splice(index, 0, child.keys[this.order - 1]);
  parent.child.splice(index + 1, 0, newNode);
  newNode.keys = child.keys.splice(this.order, this.order - 1);
  if (!child.leaf) {
    newNode.child = child.child.splice(this.order, this.order);
  }
};
BTree.prototype.search = function (key) {
  return this.searchRecursive(this.root, key);
};

BTree.prototype.searchRecursive = function (node, key) {
  let i = 0;
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }
  if (node.keys[i] === key) {
    return node; // key found in the current node
  } else if (node.leaf) {
    return null; // key does not exist in the tree
  } else {
    return this.searchRecursive(node.child[i], key); // recursively search in the appropriate child node
  }
};
let bTree = new BTree(4); // Create a B-tree with maximum 4 keys in each node
bTree.insert(5);
bTree.insert(10);
bTree.insert(20);
bTree.insert(30);
bTree.insert(40);

console.log(bTree.search(10)); // Output: BTreeNode { order: 4, keys: [ 10 ], child: [], leaf: true }
console.log(bTree.search(15)); // Output: null (key not found)
