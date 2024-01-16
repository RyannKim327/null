class BTreeNode {
  constructor(leaf = true) {
    this.keys = []; // Array to store keys
    this.children = []; // Array to store child nodes
    this.leaf = leaf; // Boolean indicating if node is a leaf
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(); // Create an empty root node
    this.order = order; // Maximum number of keys in a node
  }

  insert(key) {
    const { root, order } = this;
    if (root.keys.length === (2 * order) - 1) {
      const newNode = new BTreeNode(false);
      newNode.children.push(root);
      this.root = newNode;
      this.splitChild(newNode, 0);
    }
    this.insertNonFull(root, key);
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
      if (node.children[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index) {
    const { order } = this;
    const node = parent.children[index];
    const newNode = new BTreeNode(node.leaf);
    parent.keys.splice(index, 0, node.keys[order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = node.keys.splice(order, order - 1);

    if (!node.leaf) {
      newNode.children = node.children.splice(order, order);
    }
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
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.searchNode(node.children[i], key);
    }
  }
}
const tree = new BTree(3); // Create a B-tree with order 3

tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(6);
tree.insert(12);
tree.insert(30);

console.log(tree.search(6)); // Output: true
console.log(tree.search(15)); // Output: false
