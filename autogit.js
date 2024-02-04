class BTreeNode {
  constructor(order, leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
    this.order = order;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) { // If root is full, split it
      const temp = new BTreeNode(this.order, false);
      this.root = temp;
      temp.children[0] = root;
      this.splitChild(temp, 0);
      this.insertNonFull(temp, key);
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

  splitChild(parent, i) {
    const order = this.order;
    const child = parent.children[i];
    const newChild = new BTreeNode(order, child.leaf);
    parent.children.splice(i + 1, 0, newChild);
    parent.keys.splice(i, 0, child.keys[order - 1]);
    newChild.keys = child.keys.splice(order, order - 1);

    if (!child.leaf) {
      newChild.children = child.children.splice(order, order);
    }
  }

  search(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return node;
    }
    if (node.leaf) {
      return null;
    }
    return this.search(node.children[i], key);
  }
}
const tree = new BTree(3);

tree.insert(5);
tree.insert(2);
tree.insert(9);
tree.insert(1);
tree.insert(7);
tree.insert(4);

console.log(tree.search(tree.root, 9)); // BTreeNode { keys: [ 9 ], children: [], leaf: true, order: 3 }
console.log(tree.search(tree.root, 8)); // null
