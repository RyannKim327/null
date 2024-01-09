class BTreeNode {
  constructor(degree, leaf) {
    this.degree = degree;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  constructor(degree) {
    this.degree = degree;
    this.root = new BTreeNode(degree, true);
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.degree) - 1) {
      const newNode = new BTreeNode(this.degree, false);
      this.root = newNode;
      newNode.children.push(root);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  insertNonFull(node, key) {
    let index = node.keys.length - 1;
    if (node.leaf) {
      while (index >= 0 && key < node.keys[index]) {
        node.keys[index + 1] = node.keys[index];
        index--;
      }
      node.keys[index + 1] = key;
    } else {
      while (index >= 0 && key < node.keys[index]) {
        index--;
      }
      index++;
      if (node.children[index].keys.length === (2 * this.degree) - 1) {
        this.splitChild(node, index);
        if (key > node.keys[index]) {
          index++;
        }
      }
      this.insertNonFull(node.children[index], key);
    }
  }

  splitChild(parent, index) {
    const degree = this.degree;
    const child = parent.children[index];
    const newNode = new BTreeNode(degree, child.leaf);

    parent.keys.splice(index, 0, child.keys[degree - 1]);
    parent.children.splice(index + 1, 0, newNode);

    newNode.keys = child.keys.splice(degree, degree - 1);
    newNode.children = child.children.splice(degree, degree);
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
