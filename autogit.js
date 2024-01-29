class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getNodeHeight(node) {
    if (node === null) {
      return 0;
    }
    
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    if (node === null) {
      return;
    }

    node.height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // Helper function to perform a right rotation at the given node
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Helper function to perform a left rotation at the given node
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Function to insert a new node with the given value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Recursive helper function to insert a new node with the given value into the AVL tree
  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    this.updateNodeHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Function to delete a node with the given value from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Recursive helper function to delete a node with the given value from the AVL tree
  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to be deleted found

      if (node.left === null && node.right === null) {
        // Case 1: Node has no children
        return null;
      } else if (node.left === null || node.right === null) {
        // Case 2: Node has one child
        return node.left ? node.left : node.right;
      } else {
        // Case 3: Node has two children

        // Find the inorder successor
        const successor = this.findMinNode(node.right);
        node.value = successor.value;
        node.right = this.deleteNode(node.right, successor.value);
      }
    }

    this.updateNodeHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Helper function to find the node with the minimum value in a subtree
  findMinNode(node) {
    let current = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  // Function to perform an inorder traversal of the AVL tree
  inorder() {
    this.inorderTraversal(this.root);
  }

  // Recursive helper function to perform an inorder traversal of the AVL tree
  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }
}
const avlTree = new AVLTree();

avlTree.insert(3);
avlTree.insert(1);
avlTree.insert(2);

avlTree.inorder();  // Output: 1 2 3

avlTree.delete(2);
avlTree.inorder();  // Output: 1 3
