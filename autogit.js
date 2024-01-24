// Define a class to represent a node in the red-black tree
class Node {
  constructor(value, color = "RED") {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the tree
  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    if (this.root === null) {
      // If the tree is empty, make the new node as the root
      this.root = newNode;
      newNode.color = "BLACK";
    } else {
      // Find the appropriate position to insert the new node
      let currentNode = this.root;
      let parent;
      while (currentNode !== null) {
        parent = currentNode;
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }

      // Set the parent of the new node
      newNode.parent = parent;

      // Insert the new node
      if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }

      // Restore the red-black tree properties
      this.fixTreeAfterInsertion(newNode);
    }
  }

  // Helper method to fix the tree after insertion
  fixTreeAfterInsertion(newNode) {
    while (
      newNode.parent !== null && // The new node is not the root
      newNode.parent.color === "RED" // The parent is red
    ) {
      let parent = newNode.parent;
      let grandParent = parent.parent;

      if (parent === grandParent.left) {
        let uncle = grandParent.right;

        if (uncle !== null && uncle.color === "RED") {
          // Case 1: Uncle is red
          parent.color = "BLACK";
          uncle.color = "BLACK";
          grandParent.color = "RED";
          newNode = grandParent;
        } else {
          if (newNode === parent.right) {
            // Case 2: Uncle is black, and the new node is the right child
            this.rotateLeft(parent);
            newNode = parent;
            parent = newNode.parent;
          }

          // Case 3: Uncle is black, and the new node is the left child
          parent.color = "BLACK";
          grandParent.color = "RED";
          this.rotateRight(grandParent);
        }
      } else {
        let uncle = grandParent.left;

        if (uncle !== null && uncle.color === "RED") {
          // Case 1: Uncle is red
          parent.color = "BLACK";
          uncle.color = "BLACK";
          grandParent.color = "RED";
          newNode = grandParent;
        } else {
          if (newNode === parent.left) {
            // Case 2: Uncle is black, and the new node is the left child
            this.rotateRight(parent);
            newNode = parent;
            parent = newNode.parent;
          }

          // Case 3: Uncle is black, and the new node is the right child
          parent.color = "BLACK";
          grandParent.color = "RED";
          this.rotateLeft(grandParent);
        }
      }
    }

    // Make sure the root is always black
    this.root.color = "BLACK";
  }

  // Helper method to perform a left rotation
  rotateLeft(node) {
    const pivot = node.right;

    // Update the parent reference of the pivot node
    if (pivot !== null) {
      pivot.parent = node.parent;
    }

    // Update the child reference of the parent node
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }

    // Update the parent reference of the original node
    node.right = pivot.left;
    if (pivot.left !== null) {
      pivot.left.parent = node;
    }

    // Update the parent and left child reference of the pivot node
    node.parent = pivot;
    pivot.left = node;
  }

  // Helper method to perform a right rotation
  rotateRight(node) {
    const pivot = node.left;

    // Update the parent reference of the pivot node
    if (pivot !== null) {
      pivot.parent = node.parent;
    }

    // Update the child reference of the parent node
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }

    // Update the parent reference of the original node
    node.left = pivot.right;
    if (pivot.right !== null) {
      pivot.right.parent = node;
    }

    // Update the parent and right child reference of the pivot node
    node.parent = pivot;
    pivot.right = node;
  }
}
const rbTree = new RedBlackTree();

rbTree.insert(5);
rbTree.insert(10);
rbTree.insert(3);
rbTree.insert(1);
rbTree.insert(8);
// ... add more values as needed

console.log(rbTree);
