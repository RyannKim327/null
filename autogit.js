class BTreeNode {
  constructor(order, leaf = true) {
    this.order = order; // Maximum number of keys a node can hold
    this.keys = [];
    this.child = [];
    this.leaf = leaf;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order; // Maximum number of keys a node can hold
  }

  // Insert a key into the B-tree
  insert(key) {
    const root = this.root;
    if (root.keys.length === 2 * this.order - 1) {
      const newNode = new BTreeNode(this.order, false);

      this.root = newNode;
      newNode.child[0] = root;

      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      node.keys.push('');
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
      if (node.child[i].keys.length === 2 * this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.child[i], key);
    }
  }

  // Split the child node at index 'i'
  splitChild(parent, i) {
    const order = this.order;
    const child = parent.child[i];
    const newNode = new BTreeNode(order, child.leaf);
    parent.keys.splice(i, 0, child.keys[order - 1]);
    parent.child.splice(i + 1, 0, newNode);
    newNode.keys = child.keys.splice(order, order - 1);

    if (!child.leaf) {
      newNode.child = child.child.splice(order, order);
    }
  }

  // Search a key in the B-tree
  search(key, node = this.root) {
    const i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return node;
    }
    if (node.leaf) {
      return null;
    }
    return this.search(key, node.child[i]);
  }
}
const bTree = new BTree(3);
bTree.insert(1);
bTree.insert(2);
bTree.insert(3);
console.log(bTree.search(2)); // outputs the node containing the key: 2
