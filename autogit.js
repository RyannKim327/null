class BTreeNode {
  constructor(isLeaf = false) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(true);
    this.order = order;
  }

  insert(key) {
    const node = this.root;
    if (node.keys.length === (2 * this.order) - 1) {
      const newNode = new BTreeNode();
      this.root = newNode;
      newNode.children.push(node);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  splitChild(parent, index) {
    const node = parent.children[index];
    const newChild = new BTreeNode(node.isLeaf);
    parent.keys.splice(index, 0, node.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, newChild);
    newChild.keys = node.keys.splice(this.order, this.order - 1);
    if (!node.isLeaf) {
      newChild.children = node.children.splice(this.order, this.order);
    }
  }

  insertNonFull(node, key) {
    let index = node.keys.length - 1;
    if (node.isLeaf) {
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
      if (node.children[index].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, index);
        if (key > node.keys[index]) {
          index++;
        }
      }
      this.insertNonFull(node.children[index], key);
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) {
      index++;
    }
    if (node.keys[index] === key) {
      return true;
    }
    if (node.isLeaf) {
      return false;
    }
    return this.searchNode(node.children[index], key);
  }
}
const btree = new BTree(3); // Create a B-tree of order 3
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(15);
console.log(btree.search(20)); // Output: true
console.log(btree.search(25)); // Output: false
