class BTreeNode {
  constructor(order, leaf = true) {
    this.order = order;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order);
    this.order = order;
  }

  insert(key) {
    let node = this.root;

    if (node.keys.length === 2 * this.order - 1) {
      let newRoot = new BTreeNode(this.order, false);
      newRoot.children.push(node);
      this.splitChild(newRoot, 0);
      this.root = newRoot;
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.leaf) {
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

  splitChild(parent, index) {
    let y = parent.children[index];
    let z = new BTreeNode(this.order, y.leaf);

    parent.keys.splice(index, 0, y.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, z);

    z.keys = y.keys.splice(this.order);
    z.children = y.children.splice(this.order);

    y.keys.pop();
  }
}
