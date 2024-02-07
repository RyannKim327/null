class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(order) {
    this.order = order;
    this.root = new BTreeNode();
  }

  insert(key) {
    const { root, order } = this;
    if (root.keys.length === (2 * order) - 1) {
      const newNode = new BTreeNode(false);
      newNode.children.push(root);
      this.splitChild(newNode, 0);
      this.root = newNode;
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      node.keys.push();
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
    const { order } = this;
    const node = parent.children[index];
    const newNode = new BTreeNode(node.leaf);
    parent.keys.splice(index, 0, node.keys[order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = node.keys.splice(order, order - 1);
    if (!node.leaf) {
      newNode.children = node.children.splice(order, order);
    }
  }

  search(key, node = this.root) {
    const i = 0;
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
