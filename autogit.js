class Node {
  constructor(order, leaf) {
    this.order = order;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  constructor(order) {
    this.root = new Node(order, true);
    this.order = order;
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return node;
    }
    if (node.leaf) {
      return null;
    } else {
      return this.search(key, node.children[i]);
    }
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === 2 * this.order - 1) {
      const newRoot = new Node(this.order, false);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
      this.root = newRoot;
    } else {
      this.insertNonFull(root, key);
    }
  }

  splitChild(parent, i) {
    const order = this.order;
    const child = parent.children[i];
    const newChild = new Node(order, child.leaf);
    parent.keys.splice(i, 0, child.keys[order - 1]);
    parent.children.splice(i + 1, 0, newChild);
    newChild.keys = child.keys.splice(order, order - 1);
    if (!child.leaf) {
      newChild.children = child.children.splice(order, order);
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
      if (node.children[i].keys.length === 2 * this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }
}
