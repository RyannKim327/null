// Node class represents a node in the red-black tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "red"; // Initialize newly inserted nodes as red
  }
}

// RedBlackTree class represents the red-black tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node with the given data into the tree
  insert(data) {
    const newNode = new Node(data);

    // Helper function to recursively insert the node and maintain red-black tree properties
    const insertHelper = (node, newNode) => {
      // If the tree is empty, make the new node the root and color it black
      if (node === null) {
        this.root = newNode;
        newNode.color = "black";
      } else if (newNode.data < node.data) {
        // If the data of the new node is less than the current node, insert it as the left child
        node.left = newNode;
        newNode.parent = node;
      } else if (newNode.data > node.data) {
        // If the data of the new node is greater than the current node, insert it as the right child
        node.right = newNode;
        newNode.parent = node;
      }

      // Fix any violations of the red-black tree properties after insertion
      this.fixInsertViolation(newNode);
    };

    // Call the helper function to insert the node
    insertHelper(this.root, newNode);
  }

  // Fix any violations of the red-black tree properties after insertion
  fixInsertViolation(node) {
    while (node !== this.root && node.parent.color === "red") {
      let parent = node.parent; // Parent node
      let grandParent = parent.parent; // Grandparent node

      if (parent === grandParent.left) {
        // Case 1: Parent is the left child of the grandparent
        let uncle = grandParent.right; // Uncle node

        if (uncle !== null && uncle.color === "red") {
          // Case 1.1: Uncle is red - Recolor parent, uncle, and grandparent
          parent.color = "black";
          uncle.color = "black";
          grandParent.color = "red";
          node = grandParent; // Move up the tree to fix possible violations further up
        } else {
          // Case 1.2: Uncle is black or null
          if (node === parent.right) {
            // Case 1.2.1: Node is the right child - Left rotate around parent
            this.rotateLeft(parent);
            node = parent; // Node becomes the old parent for the next case
            parent = node.parent; // Update parent and grandparent
            grandParent = parent.parent;
          }

          // Case 1.2.2: Node is the left child - Right rotate around grandparent
          parent.color = "black"; // Recolor parent and grandparent
          grandParent.color = "red";
          this.rotateRight(grandParent);
        }
      } else {
        // Case 2: Parent is the right child of the grandparent (mirror case of Case 1)
        let uncle = grandParent.left; // Uncle node

        if (uncle !== null && uncle.color === "red") {
          // Case 2.1: Uncle is red - Recolor parent, uncle, and grandparent
          parent.color = "black";
          uncle.color = "black";
          grandParent.color = "red";
          node = grandParent; // Move up the tree to fix possible violations further up
        } else {
          // Case 2.2: Uncle is black or null
          if (node === parent.left) {
            // Case 2.2.1: Node is the left child - Right rotate around parent
            this.rotateRight(parent);
            node = parent; // Node becomes the old parent for the next case
            parent = node.parent; // Update parent and grandparent
            grandParent = parent.parent;
          }

          // Case 2.2.2: Node is the right child - Left rotate around grandparent
          parent.color = "black"; // Recolor parent and grandparent
          grandParent.color = "red";
          this.rotateLeft(grandParent);
        }
      }
    }

    this.root.color = "black"; // Always color the root black
  }

  // Rotate the subtree left around the given node
  rotateLeft(node) {
    const rightChild = node.right;

    // Update node's right child and parent pointers
    node.right = rightChild.left;
    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    // Update right child's parent and node's parent pointers
    rightChild.parent = node.parent;
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    // Update right child's left and node's parent pointers
    rightChild.left = node;
    node.parent = rightChild;
  }

  // Rotate the subtree right around the given node
  rotateRight(node) {
    const leftChild = node.left;

    // Update node's left child and parent pointers
    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    // Update left child's parent and node's parent pointers
    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    // Update left child's right and node's parent pointers
    leftChild.right = node;
    node.parent = leftChild;
  }
}

// Usage:
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
