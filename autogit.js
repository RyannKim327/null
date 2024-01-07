class Node {
  constructor(order, isLeaf) {
    this.keys = [];
    this.child = [];
    this.isLeaf = isLeaf;
    this.order = order;
  }
}
class BTree {
  constructor(order) {
    this.root = null;
    this.order = order;
  }

  // Insert key into the B-tree
  insert(key) {
    if (this.root === null) {
      this.root = new Node(this.order, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === 2 * this.order - 1) {
        const newRoot = new Node(this.order, false);
        newRoot.child.push(this.root);
        this.splitChild(newRoot, 0);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  // Insert key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.isLeaf) {
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
      if (node.child[i].keys.length === 2 * this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.child[i], key);
    }
  }

  // Split the child node at given index
  splitChild(node, index) {
    const newNode = new Node(this.order, node.child[index].isLeaf);
    node.child.splice(index + 1, 0, newNode);
    const splitNode = node.child[index];
    node.keys.splice(index, 0, splitNode.keys[this.order - 1]);
    newNode.keys = splitNode.keys.splice(this.order);
    if (!splitNode.isLeaf) {
      newNode.child = splitNode.child.splice(this.order);
    }
  }

  // Search for a key in the B-tree
  search(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    }
    if (node.isLeaf) {
      return false;
    }
    return this.search(node.child[i], key);
  }
}
const bTree = new BTree(3); // number of keys per node
bTree.insert(10);
bTree.insert(20);
bTree.insert(30);
console.log(bTree.search(bTree.root, 20)); // Output: true
console.log(bTree.search(bTree.root, 40)); // Output: false
