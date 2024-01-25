// B-tree Node
class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

// B-tree
class BTree {
  constructor(order) {
    this.root = new BTreeNode(true);
    this.order = order;
  }

  // Insert a key into the B-tree
  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const node = new BTreeNode(false);
      this.root = node;
      node.children[0] = root;
      this.splitChild(node, 0);
      this.insertNonFull(node, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Insert a key into a non-full B-tree node
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

  // Split a child of a B-tree node
  splitChild(node, i) {
    const t = this.order;
    const y = node.children[i];
    const z = new BTreeNode(y.leaf);
    node.children.splice(i + 1, 0, z);
    node.keys.splice(i, 0, y.keys[t - 1]);
    z.keys = y.keys.splice(t, t - 1);
    if (!y.leaf) {
      z.children = y.children.splice(t, t);
    }
  }

  // Search the B-tree for a key
  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.search(key, node.children[i]);
    }
  }
}
const btree = new BTree(3);  // Define a B-tree with order 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
console.log(btree.search(10));  // Output: true
console.log(btree.search(15));  // Output: false
