class BTreeNode {
  constructor(order, leaf) {
    this.order = order; // Maximum number of children (keys)
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const newNode = new BTreeNode(this.order, false);
      this.root = newNode;
      newNode.children.push(root);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
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
    const newNode = new BTreeNode(order, child.leaf);
    parent.keys.splice(index, 0, child.keys[order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = child.keys.splice(order, order - 1);
    if (!child.leaf) {
      newNode.children = child.children.splice(order, order);
    }
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    }
    if (node.leaf) {
      return false;
    }
    return this.search(key, node.children[i]);
  }
}
// Create a new B-tree with order 3
const btree = new BTree(3);

// Insert keys into the B-tree
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(15);

// Search for a key in the B-tree
console.log(btree.search(20)); // true
console.log(btree.search(30)); // false
