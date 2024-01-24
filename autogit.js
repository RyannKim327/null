class BTreeNode {
  constructor(order, isLeaf = true) {
    this.order = order; // maximum number of keys the node can hold
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
  }

  // Other methods for insertion, deletion, etc.
}
class BTree {
  constructor(order) {
    this.order = order; // maximum number of keys in a node
    this.root = null; // root node of the tree
  }

  // Other methods for searching, deletion, etc.
}
class BTree {
  // ...

  insert(key, value) {
    if (!this.root) {
      this.root = new BTreeNode(this.order, true);
      this.root.keys.push({ key, value });
      return this;
    }

    if (this.root.keys.length === this.order) {
      const newRoot = new BTreeNode(this.order, false);
      newRoot.children.push(this.root);
      this.root = newRoot;
      this.splitChild(this.root, 0);
    }

    this.insertNonFull(this.root, key, value);
    return this;
  }

  insertNonFull(node, key, value) {
    let index = node.keys.length - 1;

    if (node.isLeaf) {
      while (index >= 0 && key < node.keys[index].key) {
        node.keys[index + 1] = node.keys[index];
        index--;
      }

      node.keys[index + 1] = { key, value };
    } else {
      while (index >= 0 && key < node.keys[index].key) {
        index--;
      }

      index++;

      if (node.children[index].keys.length === this.order) {
        this.splitChild(node, index);

        if (key > node.keys[index].key) {
          index++;
        }
      }

      this.insertNonFull(node.children[index], key, value);
    }
  }

  splitChild(parent, index) {
    const child = parent.children[index];
    const newChild = new BTreeNode(this.order, child.isLeaf);

    parent.keys.splice(index, 0, child.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(this.order);
    newChild.children = child.children.splice(this.order);
  }

  // ...
}
