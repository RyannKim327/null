class BTreeNode {
  constructor() {
    this.keys = [];
    this.children = [];
    this.isLeaf = true;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode();
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const node = new BTreeNode();
      this.root = node;
      node.children[0] = root;
      this.splitChild(node, 0);
      this.insertNonFull(node, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.isLeaf) {
      while (i >= 0 && node.keys[i] > key) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && node.keys[i] > key) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);
        if (node.keys[i] < key) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(node, i) {
    const t = this.order;
    const y = node.children[i];
    const z = new BTreeNode();
    node.children.splice(i + 1, 0, z);
    node.keys.splice(i, 0, y.keys[t - 1]);
    z.keys = y.keys.splice(t, y.keys.length - t);
    if (!y.isLeaf) {
      z.isLeaf = false;
      z.children = y.children.splice(t, y.children.length - t);
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return node;
    }
    if (node.isLeaf) {
      return null;
    }
    return this.searchNode(node.children[i], key);
  }
}
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);

console.log(bTree.search(10)); // BTreeNode { keys: [10], ... }
console.log(bTree.search(5)); // BTreeNode { keys: [5], ... }
console.log(bTree.search(15)); // null
