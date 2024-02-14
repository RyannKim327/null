class BTreeNode {
  constructor(order, leaf = true) {
    this.order = order; // Maximum number of child nodes
    this.keys = []; // Array to store keys
    this.child = []; // Array to store child nodes
    this.leaf = leaf; // Is the node a leaf?
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true); // Create an empty root node
    this.order = order; // Maximum number of child nodes
  }

  // Insert a key into the B-tree
  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const node = new BTreeNode(this.order, false);
      this.root = node;
      node.child[0] = root;
      this.splitChild(node, 0);
      this.insertNonFull(node, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Insert a key into a non-full node
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
      if (node.child[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.child[i], key);
    }
  }

  // Split a child node
  splitChild(node, i) {
    const order = this.order;
    const child = node.child[i];
    const newNode = new BTreeNode(order, child.leaf);
    node.child.splice(i + 1, 0, newNode);
    node.keys.splice(i, 0, child.keys[order - 1]);
    newNode.keys = child.keys.splice(order, order - 1);
    if (!child.leaf) {
      newNode.child = child.child.splice(order, order);
    }
  }

  // Search for a key in the B-tree
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
    return this.search(node.child[i], key);
  }

  // Print the B-tree in order
  print(node = this.root) {
    node.keys.forEach((key, i) => {
      if (!node.leaf) {
        this.print(node.child[i]);
      }
      console.log(key);
    });
    if (!node.leaf) {
      this.print(node.child[node.keys.length]);
    }
  }
}

// Example usage
const btree = new BTree(3); // Create a B-tree with order 3
btree.insert(5);
btree.insert(10);
btree.insert(3);
btree.insert(7);
btree.print(); // Print the keys in order
console.log(btree.search(btree.root, 10)); // Search for a key
