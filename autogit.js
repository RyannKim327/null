// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Node class for the tree
  class Node {
    constructor(data, color) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.color = color;
    }
  }

  // Insert a node into the tree
  insert(data) {
    const newNode = new Node(data, "red");
    if (this.root === null) {
      // Case 1: Empty tree
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.fixViolations(newNode);
  }

  // Helper function to perform the insertion
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // Insert in the left subtree
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Insert in the right subtree
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Fix any violations of the red-black tree properties after insertion
  fixViolations(node) {
    while (node !== this.root && node.parent.color === "red") {
      let uncle;
      if (node.parent === node.parent.parent.left) {
        // Node's parent is a left child
        uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === "red") {
          // Case 1: Red uncle
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Node is a right child
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Node is a left child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rightRotate(node.parent.parent);
        }
      } else {
        // Node's parent is a right child
        uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === "red") {
          // Case 4: Red uncle
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 5: Node is a left child
            node = node.parent;
            this.rightRotate(node);
          }
          // Case 6: Node is a right child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = "black";
  }

  // Perform a left rotation around a node
  leftRotate(node) {
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

  // Perform a right rotation around a node
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }
}
