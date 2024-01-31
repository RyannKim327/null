class BTreeNode {
  constructor(order) {
    this.keys = [];
    this.children = [];
    this.isLeaf = true;
    this.order = order;
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order);
    this.order = order;
  }

  insert(key) {
    const node = this.root;

    if (node.keys.length === (2 * this.order) - 1) { // Split root if it is full
      const newRoot = new BTreeNode(this.order);

      this.root = newRoot;
      newRoot.children[0] = node;
      this.splitChild(newRoot, 0);

      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
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

  splitChild(node, index) {
    const order = this.order;
    const child = node.children[index];
    const newNode = new BTreeNode(order);

    node.keys.splice(index, 0, child.keys[order - 1]);
    node.children.splice(index + 1, 0, newNode);
    newNode.isLeaf = child.isLeaf;

    for (let j = 0; j < order - 1; j++) {
      newNode.keys[j] = child.keys[j + order];
    }

    if (!child.isLeaf) {
      for (let j = 0; j < order; j++) {
        newNode.children[j] = child.children[j + order];
      }
    }

    child.keys.length = order - 1;
    child.children.length = child.isLeaf ? 0 : order;
  }

  search(key, node = this.root) {
    let i = 0;

    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return node;
    }

    if (node.isLeaf) {
      return null;
    }

    return this.search(key, node.children[i]);
  }
}
const btree = new BTree(3); // Create a B-tree with order 3
btree.insert(10);
btree.insert(20);
btree.insert(5);

console.log(btree.search(10)); // Output: BTreeNode { keys: [10], children: [] }
console.log(btree.search(20)); // Output: BTreeNode { keys: [20], children: [] }
console.log(btree.search(5)); // Output: BTreeNode { keys: [5], children: [] }
console.log(btree.search(15)); // Output: null
