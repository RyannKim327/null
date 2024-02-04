// Node class for AVL Tree
class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

// AVLTree class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getNodeHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    node.height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // Helper function to perform a right rotation
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    this.updateNodeHeight(z);
    this.updateNodeHeight(y);

    return y;
  }

  // Helper function to perform a left rotation
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;
    
    // Update heights
    this.updateNodeHeight(z);
    this.updateNodeHeight(y);

    return y;
  }

  // Helper function to balance the tree
  balanceNode(node) {
    // Update the height of the node
    this.updateNodeHeight(node);

    // Check the balance factor and rotate if needed
    if (this.getBalanceFactor(node) > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }
    if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Helper function to insert a node recursively
  insertNode(node, value) {
    // Perform regular BST insert
    if (node === null) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed
      return node;
    }

    // Balance the node
    return this.balanceNode(node);
  }

  // Function to insert a value into the AVL Tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to find the node with the minimum value
  findMinNode(node) {
    if (node === null || node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  // Helper function to remove a node recursively
  removeNode(node, value) {
    // Perform regular BST delete
    if (node === null) return node;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Node found, perform deletion

      // Case 1: Node has no children
      if (node.left === null && node.right === null) {
        node = null;
      }

      // Case 2: Node has one child
      else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      }

      // Case 3: Node has two children
      else {
        const temp = this.findMinNode(node.right);
        node.value = temp.value;
        node.right = this.removeNode(node.right, temp.value);
      }
    }

    // If the tree has only one node with no child
    if (node === null) {
      return node;
    }

    // Balance the node
    return this.balanceNode(node);
  }

  // Function to remove a value from the AVL Tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper function to perform an inorder traversal
  traverseInorder(node, callback) {
    if (node !== null) {
      this.traverseInorder(node.left, callback);
      callback(node.value);
      this.traverseInorder(node.right, callback);
    }
  }

  // Function to traverse the AVL Tree in inorder
  inorder(callback) {
    this.traverseInorder(this.root, callback);
  }
}
// Create an AVL Tree
const avlTree = new AVLTree();

// Insert values
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

// Remove a value
avlTree.remove(30);

// Inorder traversal
avlTree.inorder(value => {
  console.log(value);
});
