class TreeNode {
  constructor(order) {
    this.order = order; // Order of the B-tree
    this.keys = []; // Array to hold keys
    this.children = []; // Array to hold child pointers
  }

  isLeaf() {
    return this.children.length === 0;
  }
}

class BTree {
  constructor(order) {
    this.root = new TreeNode(order);
    this.order = order;
  }

  insert(key) {
    const node = this.root;
    if (node.keys.length === (2 * this.order) - 1) {
      const newRoot = new TreeNode(this.order);
      this.root = newRoot;
      newRoot.children[0] = node;
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.isLeaf()) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i = i + 1;
      if (node.children[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index) {
    const order = this.order;
    const child = parent.children[index];
    const newChild = new TreeNode(order);

    parent.keys.splice(index, 0, child.keys[order - 1]);

    parent.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(order, order - 1);
    if (!child.isLeaf()) {
      newChild.children = child.children.splice(order, order);
    }
  }

  search(key) {
    return this.searchRecursive(this.root, key);
  }

  searchRecursive(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    }
    if (node.isLeaf()) {
      return false;
    }
    return this.searchRecursive(node.children[i], key);
  }
}
const bTree = new BTree(3); // Initialize a B-tree with order 3

bTree.insert(7);
bTree.insert(3);
bTree.insert(12);
bTree.insert(1);
bTree.insert(5);

console.log(bTree.search(12)); // Output: true
console.log(bTree.search(9)); // Output: false
