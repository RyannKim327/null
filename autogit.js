// Node class represents a single node in the red-black tree
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.color = Node.RED;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

Node.RED = 0;
Node.BLACK = 1;

// RedBlackTree class represents the red-black tree data structure
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a key-value pair into the red-black tree
  insert(key, value) {
    const node = new Node(key, value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (key < current.key) {
          if (!current.left) {
            current.left = node;
            node.parent = current;
            break;
          } else {
            current = current.left;
          }
        } else if (key > current.key) {
          if (!current.right) {
            current.right = node;
            node.parent = current;
            break;
          } else {
            current = current.right;
          }
        } else {
          // Key already exists, update the value
          current.value = value;
          return;
        }
      }
    }
    this.fixTreeAfterInsert(node);
  }

  // Fix the red-black tree violations after inserting a new node
  fixTreeAfterInsert(node) {
    while (node !== this.root && node.parent.color === Node.RED) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === Node.RED) {
          // Case 1: Uncle is red - recolor and move up the tree
          node.parent.color = Node.BLACK;
          uncle.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black and node is a right child - rotate left
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Uncle is black and node is a left child - recolor and rotate right
          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          this.rightRotate(node.parent.parent);
        }
      } else {
        // Symmetric cases with left and right swapped
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === Node.RED) {
          node.parent.color = Node.BLACK;
          uncle.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          this.leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = Node.BLACK;
  }

  // Left rotation for fixing tree violations
  leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
    if (rightChild.left) {
      rightChild.left.parent = node;
    }
    rightChild.parent = node.parent;
    if (!node.parent) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    rightChild.left = node;
    node.parent = rightChild;
  }

  // Right rotation for fixing tree violations
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  // Search for a key in the red-black tree
  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) {
        return current.value;
      }
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
}

// Example usage:
const tree = new RedBlackTree();
tree.insert(5, "Apple");
tree.insert(3, "Banana");
tree.insert(7, "Orange");
const value = tree.search(3);
console.log(value); // Output: "Banana"
