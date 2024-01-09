// Create a B-tree node class
class BTreeNode {
  constructor(order) {
    this.order = order; // Maximum number of keys in a node
    this.keys = []; // Array to store keys
    this.children = []; // Array to store child nodes
    this.leaf = true; // Flag to indicate if node is a leaf or not
  }

  // Insert a key into the node
  insert(key) {
    let i = this.keys.length - 1;

    // If node is a leaf, insert the key in sorted order
    if (this.leaf) {
      while (i >= 0 && this.keys[i].key > key) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }
      this.keys[i + 1] = key;
    } else {
      // If node is not a leaf, find the appropriate child node to insert the key
      while (i >= 0 && this.keys[i].key > key) {
        i--;
      }

      if (this.children[i + 1].keys.length === (2 * this.order - 1)) {
        // If the child node is full, split it
        this.splitChild(i + 1, this.children[i + 1]);

        if (this.keys[i + 1].key < key) {
          i++;
        }
      }
      this.children[i + 1].insert(key);
    }
  }

  // Split a child node during insertion
  splitChild(i, node) {
    const newNode = new BTreeNode(node.order);
    newNode.leaf = node.leaf;

    // Move keys and children from the overflowing node to the new node
    for (let j = 0; j < this.order - 1; j++) {
      newNode.keys[j] = node.keys[j + this.order];
      node.keys[j + this.order] = undefined;
    }

    if (!node.leaf) {
      for (let j = 0; j < this.order; j++) {
        newNode.children[j] = node.children[j + this.order];
        node.children[j + this.order] = undefined;
      }
    }

    node.keys.length = this.order - 1;
    node.children.length = this.order;

    // Insert the middle key into current node
    this.keys.splice(i, 0, node.keys[this.order - 1]);

    // Add new child node
    this.children.splice(i + 1, 0, newNode);
  }
}

// Create the B-tree class
class BTree {
  constructor(order) {
    this.order = order; // Maximum number of keys in a node
    this.root = new BTreeNode(order); // Initialize with an empty root node
  }

  // Insert a key into the tree
  insert(key) {
    const root = this.root;

    if (root.keys.length === (2 * this.order - 1)) {
      // If the root node is full, split it
      const newNode = new BTreeNode(this.order);
      newNode.children[0] = root;
      this.root = newNode;
      newNode.splitChild(0, root);
      newNode.insert(key);
    } else {
      root.insert(key);
    }
  }
}
// Create a new B-tree with order 3
const btree = new BTree(3);

// Insert some keys into the B-tree
btree.insert(5);
btree.insert(3);
btree.insert(8);
btree.insert(1);
btree.insert(10);
