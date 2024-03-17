class Node {
  constructor(order, parent = null) {
    this.keys = [];
    this.children = [];
    this.parent = parent;
    this.order = order;
  }

  isLeaf() {
    return this.children.length === 0;
  }

  insertKey(key) {
    this.keys.push(key);
    this.keys.sort((a, b) => a - b);
  }

  insertChild(index, child) {
    this.children.splice(index, 0, child);
    if (child) {
      child.parent = this;
    }
  }

  splitChild(index) {
    const child = this.children[index];
    const newChild = new Node(this.order, this);
    const midIndex = Math.floor(this.order / 2);

    newChild.keys = child.keys.splice(midIndex + 1);
    newChild.children = child.children.splice(midIndex + 1);

    this.insertChild(index + 1, newChild);
    this.insertKey(child.keys.pop());
  }
}

class BTree {
  constructor(order) {
    this.root = new Node(order);
    this.order = order;
  }

  insert(key) {
    let node = this.root;

    if (node.keys.length === this.order - 1) {
      const newRoot = new Node(this.order);
      newRoot.insertChild(0, this.root);
      newRoot.splitChild(0);
      this.root = newRoot;
    }

    while (!node.isLeaf()) {
      let i = 0;
      while (i < node.keys.length && key > node.keys[i]) {
        i++;
      }

      if (node.keys[i] === key) {
        return; // key already exists in the B-tree
      }

      if (node.children[i].keys.length === this.order - 1) {
        node.splitChild(i);
        if (key > node.keys[i]) {
          i++;
        }
      }

      node = node.children[i];
    }

    node.insertKey(key);
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return true; // key found
    }

    if (node.isLeaf()) {
      return false; // key not found
    }

    return this.search(key, node.children[i]);
  }
}
