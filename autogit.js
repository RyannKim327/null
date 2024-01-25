class Node {
  constructor() {
    this.keys = [];
    this.children = [];
  }
}
class BTree {
  constructor(order) {
    this.root = new Node();
    this.order = order;
  }

  // Other methods here (insert, search, delete)
}
class BTree {
  // ...

  insert(key) {
    const node = this.root;
    if (node.keys.length === (2 * this.order) - 1) {
      const newNode = new Node();
      this.root = newNode;
      newNode.children.push(node);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  // Utility methods here (splitChild, insertNonFull)
}
class BTree {
  // ...

  splitChild(parent, index) {
    const node = parent.children[index];
    const newNode = new Node();
    parent.keys.splice(index, 0, node.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = node.keys.splice(this.order, this.order - 1);
    if (node.children.length) {
      newNode.children = node.children.splice(this.order, this.order);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (!node.children.length) {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
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
}
