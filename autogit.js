class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.value) {
      root.left = this.insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertNode(root.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return root;
    }

    // Update the height of the ancestor node
    root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    // Check if the tree is unbalanced and perform rotations if necessary
    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (value < root.left.value) {
        return this.rotateRight(root);
      } else {
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      if (value > root.right.value) {
        return this.rotateLeft(root);
      } else {
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root);
      }
    }

    return root;
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node found, now delete it
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const minRight = this.findMinValueNode(root.right);
      root.value = minRight.value;
      root.right = this.deleteNode(root.right, minRight.value);
    }

    // Update the height of the ancestor node
    root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    // Check if the tree is unbalanced and perform rotations if necessary
    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(root.left) >= 0) {
        return this.rotateRight(root);
      } else {
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(root.right) <= 0) {
        return this.rotateLeft(root);
      } else {
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root);
      }
    }

    return root;
  }

  // Search for a value in the AVL tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (root === null || root.value === value) {
      return root;
    }

    if (value < root.value) {
      return this.searchNode(root.left, value);
    }

    return this.searchNode(root.right, value);
  }

  // Perform a right rotation for balancing the tree
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = Math.max(this.getHeight(z.left), this.getHeight(z.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // Perform a left rotation for balancing the tree
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = Math.max(this.getHeight(z.left), this.getHeight(z.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // Get the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }

    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }

    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Find the node with the minimum value in a subtree
  findMinValueNode(node) {
    let current = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.delete(20);
console.log(avlTree.search(30));  // Output: Node object
