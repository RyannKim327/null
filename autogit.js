// Node class represents a single node in the AVL tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVLTree class represents the AVL tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Utility function to get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Utility function to update the height of a node
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Utility function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Utility function to perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Utility function to perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Function to insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Utility function to insert a value into a subtree rooted at a given node
  insertNode(node, value) {
    // Perform normal BST insertion
    if (node === null) return new Node(value);
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL trees
      return node;
    }

    // Update height of the current node
    this.updateHeight(node);

    // Balance the tree if needed
    const balanceFactor = this.getBalanceFactor(node);
    
    // left-left case (requires a right rotation)
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }
    
    // right-right case (requires a left rotation)
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }
    
    // left-right case (requires a left-right rotation)
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    
    // right-left case (requires a right-left rotation)
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Function to delete a value from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Utility function to delete a value from a subtree rooted at a given node
  deleteNode(node, value) {
    // Perform normal BST deletion
    if (node === null) return null;
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null || node.right === null) {
        node = node.left || node.right;
      } else {
        const successor = this.findMinNode(node.right);
        node.value = successor.value;
        node.right = this.deleteNode(node.right, successor.value);
      }
    }

    // If the tree had only one node, return
    if (node === null) return null;

    // Update height of the current node
    this.updateHeight(node);

    // Balance the tree if needed
    const balanceFactor = this.getBalanceFactor(node);

    // left-left case (requires a right rotation)
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // right-right case (requires a left rotation)
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // left-right case (requires a left-right rotation)
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // right-left case (requires a right-left rotation)
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Utility function to find the node with minimum value in a subtree
  findMinNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Function to traverse the tree in-order
  inorder() {
    this.inorderRecursive(this.root);
  }

  // Utility function to perform in-order traversal recursively
  inorderRecursive(node) {
    if (node !== null) {
      this.inorderRecursive(node.left);
      console.log(node.value);
      this.inorderRecursive(node.right);
    }
  }
}
const tree = new AVLTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log("In-order traversal:");
tree.inorder(); // Output: 10 20 30 40 50

tree.delete(30);

console.log("In-order traversal after deletion:");
tree.inorder(); // Output: 10 20 40 50
