// Node class
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = 'red'; // Default color is red
  }
}

// RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Left rotation helper method
  rotateLeft(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
    tmp.left = node;
    node.parent = tmp;
  }

  // Right rotation helper method
  rotateRight(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.right) {
      node.parent.right = tmp;
    } else {
      node.parent.left = tmp;
    }
    tmp.right = node;
    node.parent = tmp;
  }

  // Fix the tree after insertion
  fixTree(node) {
    while (node !== this.root && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  // Insertion operation
  insert(key, value) {
    let node = new Node(key, value);
    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        current.value = value; // Update value if key already exists
        return;
      }
    }

    node.parent = parent;

    if (!parent) {
      this.root = node; // Tree is empty
    } else if (key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    this.fixTree(node); // Fix the tree
  }

  // Utility method to get the minimum node
  getMinimum(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // Utility method to get the successor of a node
  getSuccessor(node) {
    if (node.right) {
      return this.getMinimum(node.right);
    }

    let parent = node.parent;
    while (parent && node === parent.right) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  // Removal operation
  remove(key) {
    let node = this.root;
    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        break;
      }
    }

    if (!node) {
      return; // Key not found
    }

    let child, successor;
    if (!node.left || !node.right) {
      successor = node;
    } else {
      successor = this.getSuccessor(node);
    }

    if (successor.left) {
      child = successor.left;
    } else {
      child = successor.right;
    }

    if (child) {
      child.parent = successor.parent;
    }

    if (!successor.parent) {
      this.root = child;
    } else if (successor === successor.parent.left) {
      successor.parent.left = child;
    } else {
      successor.parent.right = child;
    }

    if (successor !== node) {
      node.key = successor.key;
      node.value = successor.value;
    }

    if (successor.color === 'black') {
      this.deleteFixTree(child, successor.parent);
    }
  }

  // Fix the tree after deletion
  deleteFixTree(node, parent) {
    while (node !== this.root && (!node || node.color === 'black')) {
      if (node === parent.left) {
        let sibling = parent.right;
        if (sibling.color === 'red') {
          sibling.color = 'black';
          parent.color = 'red';
          this.rotateLeft(parent);
          sibling = parent.right;
        }
        if ((!sibling.left || sibling.left.color === 'black') &&
            (!sibling.right || sibling.right.color === 'black')) {
          sibling.color = 'red';
          node = parent;
          parent = node.parent;
        } else {
          if (!sibling.right || sibling.right.color === 'black') {
            sibling.left.color = 'black';
            sibling.color = 'red';
            this.rotateRight(sibling);
            sibling = parent.right;
          }
          sibling.color = parent.color;
          parent.color = 'black';
          sibling.right.color = 'black';
          this.rotateLeft(parent);
          node = this.root;
          break;
        }
      } else {
        let sibling = parent.left;
        if (sibling.color === 'red') {
          sibling.color = 'black';
          parent.color = 'red';
          this.rotateRight(parent);
          sibling = parent.left;
        }
        if ((!sibling.left || sibling.left.color === 'black') &&
            (!sibling.right || sibling.right.color === 'black')) {
          sibling.color = 'red';
          node = parent;
          parent = node.parent;
        } else {
          if (!sibling.left || sibling.left.color === 'black') {
            sibling.right.color = 'black';
            sibling.color = 'red';
            this.rotateLeft(sibling);
            sibling = parent.left;
          }
          sibling.color = parent.color;
          parent.color = 'black';
          sibling.left.color = 'black';
          this.rotateRight(parent);
          node = this.root;
          break;
        }
      }
    }
    if (node) {
      node.color = 'black';
    }
  }

  // Utility method to get the value for a given key
  get(key) {
    let node = this.root;
    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node.value;
      }
    }
    return undefined; // Key does not exist
  }
}
// Create a new red-black tree instance
const tree = new RedBlackTree();

// Insert key-value pairs
tree.insert(5, 'apple');
tree.insert(2, 'banana');
tree.insert(7, 'cherry');
tree.insert(1, 'date');
tree.insert(4, 'elderberry');
tree.insert(6, 'fig');
tree.insert(8, 'grape');

// Retrieve values for given keys
console.log(tree.get(2)); // Output: 'banana'
console.log(tree.get(6)); // Output: 'fig'

// Remove a key-value pair
tree.remove(4);

// Print the tree structure
console.log(tree.root); // Output: The root node of the red-black tree
