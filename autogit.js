class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // Minimum degree
    this.keys = []; // Array to store keys
    this.child = []; // Array to store child nodes
    this.leaf = leaf; // True if node is a leaf, false otherwise
  }
}
class BTree {
  constructor(t) {
    this.root = null; // Root of the tree
    this.t = t; // Minimum degree
  }
}
BTree.prototype.search = function(x, k) {
  // Find the first key greater than or equal to k
  let i = 0;
  while (i < x.keys.length && k > x.keys[i]) {
    i++;
  }

  // If k is found in the current node, return true
  if (i < x.keys.length && k === x.keys[i]) {
    return true;
  }

  // If the current node is a leaf, return false (key not found)
  if (x.leaf) {
    return false;
  }

  // Go to the appropriate child node
  return this.search(x.child[i], k);
}
BTree.prototype.insert = function(k) {
  // If the tree is empty, create a new node and make it the root
  if (this.root === null) {
    this.root = new BTreeNode(this.t, true);
    this.root.keys.push(k);
  } else {
    // If the root is full, grow the tree
    if (this.root.keys.length === (2 * this.t) - 1) {
      let newNode = new BTreeNode(this.t, false);
      newNode.child.push(this.root);
      this.splitChild(newNode, 0, this.root);
      this.root = newNode;
    }
    this.insertNonFull(this.root, k);
  }
}

BTree.prototype.insertNonFull = function(x, k) {
  let i = x.keys.length - 1;

  if (x.leaf) {
    // If x is a leaf, insert k into x's keys array at the appropriate position
    while (i >= 0 && k < x.keys[i]) {
      i--;
    }
    x.keys.splice(i + 1, 0, k);
  } else {
    // If x is not a leaf, find the appropriate child for k and insert
    while (i >= 0 && k < x.keys[i]) {
      i--;
    }
    i++;

    if (x.child[i].keys.length === (2 * this.t) - 1) {
      this.splitChild(x, i, x.child[i]);
      if (k > x.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(x.child[i], k);
  }
}

BTree.prototype.splitChild = function(x, i, y) {
  let z = new BTreeNode(this.t, y.leaf);
  x.child.splice(i + 1, 0, z);

  let keysToMove = this.t - 1;
  z.keys = y.keys.splice(this.t, keysToMove);

  if (!y.leaf) {
    z.child = y.child.splice(this.t, keysToMove + 1);
  }

  x.keys.splice(i, 0, y.keys.pop());
}
BTree.prototype.traverse = function() {
  if (this.root !== null) {
    this.traverseNode(this.root);
  }
}

BTree.prototype.traverseNode = function(x) {
  let i;
  for (i = 0; i < x.keys.length; i++) {
    if (x.leaf === false) {
      this.traverseNode(x.child[i]);
    }
    console.log(x.keys[i]);
  }

  if (x.leaf === false) {
    this.traverseNode(x.child[i]);
  }
}
let B = new BTree(3);
B.insert(10);
B.insert(20);
B.insert(5);
B.insert(6);
B.insert(12);
B.insert(30);
B.insert(7);
B.insert(17);

console.log("Traversal of the constucted tree:");
B.traverse(); // Output: 5, 6, 7, 10, 12, 17, 20, 30

console.log(B.search(B.root, 6)); // Output: true
console.log(B.search(B.root, 15)); // Output: false
