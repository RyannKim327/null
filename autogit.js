// Create a class for the RedBlackTree node
class RedBlackNode {
  constructor(value, color, left = null, right = null, parent = null) {
    this.value = value;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

// Create the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Left rotation operation
  leftRotate(node) {
    let rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Right rotation operation
  rightRotate(node) {
    let leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Insert a value into the tree
  insert(value) {
    let newNode = new RedBlackNode(value, "red");

    if (this.root === null) {
      // If the tree is empty
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode !== null) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }

    this.insertionFixup(newNode); // fix up the tree
  }

  // Fix the Red-Black tree properties after insertion
  insertionFixup(node) {
    while (node.parent !== null && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rightRotate(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;

        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = "black";
  }

  // Delete a value from the tree
  delete(value) {
    let node = this.search(value);

    if (node === null) {
      return;
    }

    let fixupNode; // node to be fixed up after deletion
    let originalColor = node.color;

    if (node.left === null) {
      fixupNode = node.right;
      this.transplant(node, node.right);
    } else if (node.right === null) {
      fixupNode = node.left;
      this.transplant(node, node.left);
    } else {
      let successor = this.minimum(node.right);
      originalColor = successor.color;
      fixupNode = successor.right;

      if (successor.parent === node) {
        fixupNode.parent = successor;
      } else {
        this.transplant(successor, successor.right);
        successor.right = node.right;
        successor.right.parent = successor;
      }

      this.transplant(node, successor);
      successor.left = node.left;
      successor.left.parent = successor;
      successor.color = node.color;
    }

    if (originalColor === "black") {
      this.deletionFixup(fixupNode);
    }
  }

  // Fix the Red-Black tree properties after deletion
  deletionFixup(node) {
    while (node !== this.root && (node === null || node.color === "black")) {
      if (node === node.parent.left) {
        let sibling = node.parent.right;

        if (sibling.color === "red") {
          sibling.color = "black";
          node.parent.color = "red";
          this.leftRotate(node.parent);
          sibling = node.parent.right;
        }

        if (
          (sibling.left === null || sibling.left.color === "black") &&
          (sibling.right === null || sibling.right.color === "black")
        ) {
          sibling.color = "red";
          node = node.parent;
        } else {
          if (sibling.right === null || sibling.right.color === "black") {
            sibling.left.color = "black";
            sibling.color = "red";
            this.rightRotate(sibling);
            sibling = node.parent.right;
          }

          sibling.color = node.parent.color;
          node.parent.color = "black";
          sibling.right.color = "black";
          this.leftRotate(node.parent);
          node = this.root;
        }
      } else {
        let sibling = node.parent.left;

        if (sibling.color === "red") {
          sibling.color = "black";
          node.parent.color = "red";
          this.rightRotate(node.parent);
          sibling = node.parent.left;
        }

        if (
          (sibling.right === null || sibling.right.color === "black") &&
          (sibling.left === null || sibling.left.color === "black")
        ) {
          sibling.color = "red";
          node = node.parent;
        } else {
          if (sibling.left === null || sibling.left.color === "black") {
            sibling.right.color = "black";
            sibling.color = "red";
            this.leftRotate(sibling);
            sibling = node.parent.left;
          }

          sibling.color = node.parent.color;
          node.parent.color = "black";
          sibling.left.color = "black";
          this.rightRotate(node.parent);
          node = this.root;
        }
      }
    }

    if (node !== null) {
      node.color = "black";
    }
  }

  // Transplants one subtree with another in the tree
  transplant(u, v) {
    if (u.parent === null) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }

    if (v !== null) {
      v.parent = u.parent;
    }
  }

  // Search for a value in the tree
  search(value) {
    let currentNode = this.root;

    while (currentNode !== null && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }

  // Find the minimum node in the tree
  minimum(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
}
