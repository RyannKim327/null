// Red-Black Tree Node
class RBTreeNode {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Red-Black Tree implementation
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new RBTreeNode(value, "red"); // Start with a red node
    if (this.root === null) {
      // Empty tree
      newNode.color = "black"; // Make root black
      this.root = newNode;
    } else {
      let current = this.root;
      while (current !== null) {
        if (value < current.value) {
          if (current.left === null) {
            // Insert as left child
            current.left = newNode;
            newNode.parent = current;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            // Insert as right child
            current.right = newNode;
            newNode.parent = current;
            break;
          } else {
            current = current.right;
          }
        } else {
          // Duplicate value, do not insert
          return;
        }
      }

      this.fixTreeAfterInsert(newNode);
    }
  }

  // Restore red-black properties after insert
  fixTreeAfterInsert(node) {
    while (
      node.parent !== null &&
      node.parent.color === "red" &&
      node !== this.root
    ) {
      const parentNode = node.parent;
      const grandparentNode = node.parent.parent;

      if (parentNode === grandparentNode.left) {
        // Left subtree case
        const uncleNode = grandparentNode.right;

        if (uncleNode !== null && uncleNode.color === "red") {
          // Case 1: Uncle is red
          parentNode.color = "black";
          uncleNode.color = "black";
          grandparentNode.color = "red";
          node = grandparentNode;
        } else {
          // Case 2: Uncle is black
          if (node === parentNode.right) {
            node = parentNode;
            this.rotateLeft(node);
          }
          // Case 3: Uncle is black (after Case 2)
          parentNode.color = "black";
          grandparentNode.color = "red";
          this.rotateRight(grandparentNode);
        }

      } else {
        // Right subtree case
        const uncleNode = grandparentNode.left;

        if (uncleNode !== null && uncleNode.color === "red") {
          // Case 1: Uncle is red
          parentNode.color = "black";
          uncleNode.color = "black";
          grandparentNode.color = "red";
          node = grandparentNode;
        } else {
          // Case 2: Uncle is black
          if (node === parentNode.left) {
            node = parentNode;
            this.rotateRight(node);
          }
          // Case 3: Uncle is black (after Case 2)
          parentNode.color = "black";
          grandparentNode.color = "red";
          this.rotateLeft(grandparentNode);
        }
      }
    }

    this.root.color = "black"; // Ensure root is always black
  }

  // Rotate node to the left
  rotateLeft(node) {
    const rightChild = node.right;
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

  // Rotate node to the right
  rotateRight(node) {
    const leftChild = node.left;
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

  // Search for a value in the tree
  search(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false; // Value not found
  }
}
// Create a Red-Black Tree instance
const rbTree = new RedBlackTree();

// Insert values
rbTree.insert(5);
rbTree.insert(3);
rbTree.insert(8);
rbTree.insert(2);
rbTree.insert(4);
rbTree.insert(7);
rbTree.insert(9);

// Search for a value
console.log(rbTree.search(4)); // Output: true
console.log(rbTree.search(6)); // Output: false
