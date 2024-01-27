class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "black"; // Default color is black
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new node into the tree
  insert(key, value) {
    const newNode = new Node(key, value);
    if (!this.root) {
      // The tree is empty, so the new node becomes the root
      newNode.color = "black"; // Set root color to black
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (key < current.key) {
          // Go to the left subtree
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            newNode.parent = current;
            break;
          }
        } else if (key > current.key) {
          // Go to the right subtree
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            newNode.parent = current;
            break;
          }
        } else {
          // Key already exists, update the value
          current.value = value;
          return;
        }
      }
      this.fixRedBlackTree(newNode); // Adjust the tree to maintain red-black properties
    }
  }

  // Method to fix the red-black tree after insertion
  fixRedBlackTree(node) {
    while (node.parent && node.parent.color === "red") {
      const grandparent = node.parent.parent;
      if (node.parent === grandparent.left) {
        const uncle = grandparent.right;
        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red, change colors
          node.parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent; // Move up the tree
        } else {
          if (node === node.parent.right) {
            // Case 2: Node is a right child, perform left rotation
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Node is a left child, recolor and right rotate
          node.parent.color = "black";
          grandparent.color = "red";
          this.rightRotate(grandparent);
        }
      } else {
        const uncle = grandparent.left;
        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red, change colors
          node.parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent; // Move up the tree
        } else {
          if (node === node.parent.left) {
            // Case 2: Node is a left child, perform right rotation
            node = node.parent;
            this.rightRotate(node);
          }
          // Case 3: Node is a right child, recolor and left rotate
          node.parent.color = "black";
          grandparent.color = "red";
          this.leftRotate(grandparent);
        }
      }
    }
    this.root.color = "black"; // Ensure the root color is always black
  }

  // Method to perform a left rotation
  leftRotate(node) {
    const pivot = node.right;
    node.right = pivot.left;
    if (pivot.left) pivot.left.parent = node;
    pivot.parent = node.parent;
    if (!node.parent) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    pivot.left = node;
    node.parent = pivot;
  }

  // Method to perform a right rotation
  rightRotate(node) {
    const pivot = node.left;
    node.left = pivot.right;
    if (pivot.right) pivot.right.parent = node;
    pivot.parent = node.parent;
    if (!node.parent) {
      this.root = pivot;
    } else if (node === node.parent.right) {
      node.parent.right = pivot;
    } else {
      node.parent.left = pivot;
    }
    pivot.right = node;
    node.parent = pivot;
  }

  // Method to search for a key in the tree
  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) {
        return current.value;
      } else if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; // Key not found
  }

  // Method to delete a node from the tree
  delete(key) {
    const node = this.findNode(key);
    if (!node) return;

    const replacement = this.findReplacementNode(node);
    const replacementChild = replacement ? (replacement.left || replacement.right) : null;
    const parentNode = node.parent;

    if (replacement === null) {
      // Case 1: Node has no children
      if (parentNode === null) {
        this.root = null; // Node is the root
      } else {
        if (node === parentNode.left) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
        this.fixDoubleBlack(parentNode);
      }
    } else if (replacement.left === null && replacement.right === null) {
      // Case 2: Replacement has no children
      const parent = replacement.parent;
      if (parent.left === replacement) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      replacement.parent = null;
      replacement.color = "black"; // Set the replacement color to black
      if (replacementChild) {
        replacementChild.parent = parent;
      }
      this.fixDoubleBlack(parent);
    } else {
      // Case 3: Replacement has one child
      if (replacementChild) {
        if (replacement === parentNode) {
          // If the replacement is the parent's child, update the parent's child to be the replacement's child
          replacementChild.parent = parentNode;
        } else {
          // Otherwise, update the replacement child's parent to be the replacement's parent
          replacementChild.parent = replacement.parent;
        }
      }
      if (parentNode === null) {
        // If the parent is null, the replacement becomes the new root
        this.root = replacement;
      } else {
        if (parentNode.left === node) {
          parentNode.left = replacement;
        } else {
          parentNode.right = replacement;
        }
      }
      replacement.parent = parentNode;
      replacement.color = node.color; // Set the replacement color to node's color
      if (node === this.root) {
        this.root = replacement;
      } else {
        this.fixDoubleBlack(replacementChild || replacement);
      }
    }
  }

  // Method to fix double black violation
  fixDoubleBlack(node) {
    while (node !== this.root && node.color === "black") {
      const parent = node.parent;
      if (node === parent.left) {
        let sibling = parent.right;
        if (sibling.color === "red") {
          // Case 1: Sibling is red, recoloring
          sibling.color = "black";
          parent.color = "red";
          this.leftRotate(parent);
          sibling = parent.right;
        }
        if (sibling) {
          if (
            (!sibling.left || sibling.left.color === "black") &&
            (!sibling.right || sibling.right.color === "black")
          ) {
            // Case 2: Sibling and its children are black
            sibling.color = "red";
            node = parent;
          } else {
            if (!sibling.right || sibling.right.color === "black") {
              // Case 3: Sibling is black, sibling's left child is red, and sibling's right child is black
              sibling.left.color = "black";
              sibling.color = "red";
              this.rightRotate(sibling);
              sibling = parent.right;
            }
            // Case 4: Sibling is black, sibling's right child is red
            sibling.color = parent.color;
            parent.color = "black";
            sibling.right.color = "black";
            this.leftRotate(parent);
            node = this.root;
          }
        }
      } else {
        let sibling = parent.left;
        if (sibling.color === "red") {
          // Case 1: Sibling is red, recoloring
          sibling.color = "black";
          parent.color = "red";
          this.rightRotate(parent);
          sibling = parent.left;
        }
        if (sibling) {
          if (
            (!sibling.left || sibling.left.color === "black") &&
            (!sibling.right || sibling.right.color === "black")
          ) {
            // Case 2: Sibling and its children are black
            sibling.color = "red";
            node = parent;
          } else {
            if (!sibling.left || sibling.left.color === "black") {
              // Case 3: Sibling is black, sibling's right child is red, and sibling's left child is black
              sibling.right.color = "black";
              sibling.color = "red";
              this.leftRotate(sibling);
              sibling = parent.left;
            }
            // Case 4: Sibling is black, sibling's left child is red
            sibling.color = parent.color;
            parent.color = "black";
            sibling.left.color = "black";
            this.rightRotate(parent);
            node = this.root;
          }
        }
      }
    }
    node.color = "black"; // Set node color to black
  }

  // Helper method to find a node with a specific key
  findNode(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) {
        return current;
      } else if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; // Key not found
  }

  // Helper method to find replacement node (minimum of right subtree)
  findReplacementNode(node) {
    if (node.left && node.right) {
      // Node has both left and right children
      let current = node.right;
      while (current.left) {
        current = current.left;
      }
      return current;
    } else if (node.left) {
      // Node has only left child
      return node.left;
    } else if (node.right) {
      // Node has only right child
      return node.right;
    } else {
      // Node has no children
      return null;
    }
  }
}
const tree = new RedBlackTree();

tree.insert(10, "Value 10");
tree.insert(20, "Value 20");
tree.insert(30, "Value 30");
tree.insert(40, "Value 40");
tree.insert(50, "Value 50");

console.log(tree.search(30)); // Output: Value 30

tree.delete(30);

console.log(tree.search(30)); // Output: null
