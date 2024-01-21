class BTreeNode {
  constructor(order) {
    this.order = order;
    this.keys = [];
    this.children = [];
    this.leaf = true;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order);
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const newNode = new BTreeNode(this.order);
      this.root = newNode;
      newNode.children[0] = root;
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
    const newNode = new BTreeNode(order);
    parent.keys.splice(index, 0, child.keys[order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.leaf = child.leaf;
    for (let i = 0; i < order - 1; i++) {
      newNode.keys[i] = child.keys[i + order];
    }
    if (!child.leaf) {
      for (let i = 0; i < order; i++) {
        newNode.children[i] = child.children[i + order];
      }
    }
    child.keys.length = order - 1;
    child.children.length = order;
  }

  search(node, key) {
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
    return this.search(node.children[i], key);
  }
}
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
console.log(bTree.search(bTree.root, 10)); // Output: true
console.log(bTree.search(bTree.root, 30)); // Output: false
