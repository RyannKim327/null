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
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to update the height of a node after insertion or deletion
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to perform a right rotation at the given node
  rotateRight(node) {
    const newRoot = node.left;
    const rightChildOfNewRoot = newRoot.right;

    // Perform rotation
    newRoot.right = node;
    node.left = rightChildOfNewRoot;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Helper function to perform a left rotation at the given node
  rotateLeft(node) {
    const newRoot = node.right;
    const leftChildOfNewRoot = newRoot.left;

    // Perform rotation
    newRoot.left = node;
    node.right = leftChildOfNewRoot;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Helper function to balance the tree after insertion or deletion
  balance(node) {
    if (node === null) return null;

    // Update height of the current node
    this.updateHeight(node);

    // Check balance factor
    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicates are not allowed in the AVL tree
      return node;
    }

    return this.balance(node);
  }

  // Remove a value from the AVL tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Node to be deleted is found
      if (node.left === null && node.right === null) {
        // Case 1: Node is a leaf node
        node = null;
      } else if (node.left === null || node.right === null) {
        // Case 2: Node has only one child
        node = node.left || node.right;
      } else {
        // Case 3: Node has both left and right children
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.removeNode(node.right, minValue);
      }
    }

    if (node !== null) {
      return this.balance(node);
    }

    return node;
  }

  // Helper function to find the minimum value in a subtree
  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // Perform an in-order traversal of the AVL tree
  inOrderTraversal() {
    const result = [];

    function traverse(node) {
      if (node !== null) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

console.log(avlTree.inOrderTraversal());
// Output: [10, 20, 30, 40, 50]

avlTree.remove(30);

console.log(avlTree.inOrderTraversal());
// Output: [10, 20, 40, 50]
