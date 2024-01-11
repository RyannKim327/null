class BTreeNode {
  constructor(order) {
    this.order = order; // the maximum number of keys the node can hold
    this.keys = [];     // sorted array of keys
    this.values = [];   // array of corresponding values
    this.children = []; // array of child nodes
    this.isLeaf = true; // flag to indicate if the node is a leaf
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order);
    this.order = order;
  }

  insert(key, value) {
    const { root, order } = this;

    if (root.keys.length === 2 * order - 1) {
      const newRoot = new BTreeNode(order);
      newRoot.children.push(root);
      this.root = newRoot;
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key, value);
    } else {
      this.insertNonFull(root, key, value);
    }
  }

  insertNonFull(node, key, value) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        node.values[i + 1] = node.values[i];
        i--;
      }

      node.keys[i + 1] = key;
      node.values[i + 1] = value;
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

      this.insertNonFull(node.children[i], key, value);
    }
  }

  splitChild(parent, index) {
    const { order } = this;
    const child = parent.children[index];
    const newChild = new BTreeNode(order);
    parent.keys.splice(index, 0, child.keys[order - 1]);
    parent.values.splice(index, 0, child.values[order - 1]);
    parent.children.splice(index + 1, 0, newChild);
    newChild.isLeaf = child.isLeaf;

    for (let j = 0; j < order - 1; j++) {
      newChild.keys[j] = child.keys[j + order];
      newChild.values[j] = child.values[j + order];
    }

    if (!child.isLeaf) {
      for (let j = 0; j < order; j++) {
        newChild.children[j] = child.children[j + order];
      }
    }

    child.keys.length = order - 1;
    child.values.length = order - 1;
    child.children.length = child.isLeaf ? 0 : order;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let i = 0;

    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return node.values[i];
    } else if (node.isLeaf) {
      return null;
    } else {
      return this.searchNode(node.children[i], key);
    }
  }
}
const bTree = new BTree(3); // Order 3 B-tree
bTree.insert(5, "Five");
bTree.insert(3, "Three");
bTree.insert(7, "Seven");
console.log(bTree.search(5)); // Output: "Five"
console.log(bTree.search(10)); // Output: null
