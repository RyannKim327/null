class AVLTree {
  constructor() {
    this.root = null;
  }

  // Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }

  // Helper function to calculate the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to perform left rotation
  leftRotate(node) {
    const rightChild = node.right;
    const rightChildLeft = rightChild.left;

    // Perform rotation
    rightChild.left = node;
    node.right = rightChildLeft;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(rightChild);

    return rightChild; // new root
  }

  // Helper function to perform right rotation
  rightRotate(node) {
    const leftChild = node.left;
    const leftChildRight = leftChild.right;

    // Perform rotation
    leftChild.right = node;
    node.left = leftChildRight;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(leftChild);

    return leftChild; // new root
  }

  // Helper function to balance the tree
  balance(node) {
    // Update the height of the node
    this.updateHeight(node);

    // Left heavy
    if (this.getBalanceFactor(node) > 1) {
      // Left-Left case
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rightRotate(node);
      }
      // Left-Right case
      else {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }
    
    // Right heavy
    if (this.getBalanceFactor(node) < -1) {
      // Right-Right case
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.leftRotate(node);
      }
      // Right-Left case
      else {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node; // no rotation needed
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    // Perform standard BST insertion
    if (node === null) {
      return new Node(value);
    }
    
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else {
      node.right = this._insert(node.right, value);
    }

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree if needed
    return this.balance(node);
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    // Perform standard BST deletion
    if (node === null) return null;

    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      // Node to be deleted found

      // Node has no child or only one child
      if (node.left === null || node.right === null) {
        node = node.left || node.right;
      }
      // Node has two children
      else {
        // Find the inorder successor (smallest in the right subtree)
        const successorNode = this.getMinValueNode(node.right);

        // Copy the successor's value to the current node
        node.value = successorNode.value;

        // Delete the successor node
        node.right = this._delete(node.right, successorNode.value);
      }
    }

    // If the tree had only one node, return
    if (node === null) return node;

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree if needed
    return this.balance(node);
  }

  // Get the node with the minimum value in a subtree
  getMinValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Search for a value in the AVL tree
  search(value) {
    return this._search(this.root, value);
  }

  _search(node, value) {
    if (node === null || node.value === value) return node;
    
    if (value < node.value) {
      return this._search(node.left, value);
    } else {
      return this._search(node.right, value);
    }
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(12);

console.log(avlTree.search(15)); // Returns the node with value 15

avlTree.delete(5);

console.log(avlTree.search(5)); // Returns null (node not found)
