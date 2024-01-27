class Node {
  constructor(key) {
    this.key = key;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new key into the AVL tree
  insert(key) {
    // Implement the logic for key insertion here
  }

  // Method to delete a key from the AVL tree
  delete(key) {
    // Implement the logic for key deletion here
  }

  // Method to balance the AVL tree
  balance(node) {
    // Implement the logic to balance the tree here
  }

  // Utility methods (optional) - height, getMinValue, getMaxValue, etc.
}
insert(key) {
  this.root = this.insertNode(this.root, key);
}

insertNode(node, key) {
  // Standard BST insertion
  if (node === null) {
    return new Node(key);
  }

  if (key < node.key) {
    node.left = this.insertNode(node.left, key);
  } else if (key > node.key) {
    node.right = this.insertNode(node.right, key);
  } else {
    // Duplicate keys are not allowed
    return node;
  }

  // Update height of this node
  node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

  // Balance the tree
  return this.balance(node);
}
balance(node) {
  // Calculate the balance factor of the node
  const balanceFactor = this.getBalanceFactor(node);

  // Left Left Case: Perform a right rotation
  if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
    return this.rotateRight(node);
  }

  // Right Right Case: Perform a left rotation
  if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
    return this.rotateLeft(node);
  }

  // Left Right Case: Perform a left-right rotation
  if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
    node.left = this.rotateLeft(node.left);
    return this.rotateRight(node);
  }

  // Right Left Case: Perform a right-left rotation
  if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
    node.right = this.rotateRight(node.right);
    return this.rotateLeft(node);
  }

  return node;
}
rotateLeft(node) {
  const rightChild = node.right;
  const rightLeftChild = rightChild.left;

  // Perform rotation
  rightChild.left = node;
  node.right = rightLeftChild;

  // Update heights
  node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  rightChild.height = 1 + Math.max(this.getHeight(rightChild.left), this.getHeight(rightChild.right));

  return rightChild;
}

rotateRight(node) {
  const leftChild = node.left;
  const leftRightChild = leftChild.right;

  // Perform rotation
  leftChild.right = node;
  node.left = leftRightChild;

  // Update heights
  node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  leftChild.height = 1 + Math.max(this.getHeight(leftChild.left), this.getHeight(leftChild.right));

  return leftChild;
}
