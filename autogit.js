// Define Node class
class Node {
  constructor(order) {
    this.order = order; // Maximum number of children
    this.keys = []; // Array to store keys
    this.children = []; // Array to store children
    this.isLeaf = true; // Indicates whether the node is a leaf node
  }
}

// Define BTree class
class BTree {
  constructor(order) {
    this.root = new Node(order); // Initialize an empty tree with root node
    this.order = order; // Maximum number of children
  }

  // Insert a key into the tree
  insert(key) {
    const node = this.root;

    if (node.keys.length === (2 * this.order) - 1) {
      const newRoot = new Node(this.order);

      this.root = newRoot;
      newRoot.children[0] = node;

      this.splitChild(newRoot, 0);

      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  // Insert key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Shifting keys to make space for new key
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }

      // Insert the new key at its sorted position
      node.keys[i + 1] = key;
    } else {
      // Finding the child node to insert the key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }

      i++;

      // Splitting the child if it's full
      if (node.children[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);

        if (key > node.keys[i]) {
          i++;
        }
      }

      // Recursively insert the key in the child node
      this.insertNonFull(node.children[i], key);
    }
  }

  // Split child node into two
  splitChild(parent, index) {
    const order = this.order;
    const child = parent.children[index];
    const newNode = new Node(order);

    parent.keys.splice(index, 0, child.keys[order - 1]);
    parent.children.splice(index + 1, 0, newNode);

    newNode.isLeaf = child.isLeaf;

    // Moving keys from the full child to newly created child
    for (let j = 0; j < order - 1; j++) {
      newNode.keys[j] = child.keys[j + order];
    }

    child.keys.length = order - 1;

    if (!child.isLeaf) {
      // Moving children from the full child to newly created child
      for (let j = 0; j < order; j++) {
        newNode.children[j] = child.children[j + order];
      }

      child.children.length = order;
    }
  }

  // Search for a key in the tree
  search(key, node = this.root) {
    let i = 0;

    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return true;
    }

    if (node.isLeaf) {
      return false;
    }

    return this.search(key, node.children[i]);
  }
}

// Example usage
const bTree = new BTree(3);

bTree.insert(1);
bTree.insert(2);
bTree.insert(3);
bTree.insert(4);
bTree.insert(5);

console.log(bTree.search(3)); // Output: true
console.log(bTree.search(6)); // Output: false
