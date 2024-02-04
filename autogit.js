class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.childs = [];
    this.leaf = leaf;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(true);
    this.order = order;
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (i < node.keys.length && key === node.keys[i]) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.search(key, node.childs[i]);
    }
  }
}
class BTree {
  // ...

  insert(key) {
    const node = this.root;
    if (node.keys.length === this.order - 1) {
      const newNode = new BTreeNode(false);
      this.root = newNode;
      newNode.childs.push(node);
      this._splitChild(newNode, 0);
      this._insertNonFull(newNode, key);
    } else {
      this._insertNonFull(node, key);
    }
  }

  _insertNonFull(node, key) {
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
      if (node.childs[i].keys.length === this.order - 1) {
        this._splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this._insertNonFull(node.childs[i], key);
    }
  }

  _splitChild(parent, index) {
    const node = parent.childs[index];
    const newNode = new BTreeNode(node.leaf);
    parent.keys.splice(index, 0, node.keys[this.order - 1]);
    parent.childs.splice(index + 1, 0, newNode);
    newNode.keys = node.keys.splice(this.order, this.order - 1);
    if (!node.leaf) {
      newNode.childs = node.childs.splice(this.order, this.order);
    }
  }
}
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);

console.log(bTree.search(10)); // true
console.log(bTree.search(30)); // false
