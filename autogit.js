class AVLNode {
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

  // Utility function to get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Utility function to update the height of a node
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Utility function to calculate the balance factor of a node
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

  // Function to insert a node in the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) return new AVLNode(value);

    if (value < root.value) {
      root.left = this.insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertNode(root.right, value);
    } else {
      return root;
    }

    this.updateHeight(root);

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && value < root.left.value) {
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && value > root.right.value) {
      return this.rotateLeft(root);
    }

    if (balanceFactor > 1 && value > root.left.value) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && value < root.right.value) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Function to delete a node from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null || root.right === null) {
        root = root.left || root.right;
      } else {
        const successor = this.findMinNode(root.right);
        root.value = successor.value;
        root.right = this.deleteNode(root.right, successor.value);
      }
    }

    if (root === null) return root;

    this.updateHeight(root);

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0) {
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0) {
      return this.rotateLeft(root);
    }

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Utility function to find the node with minimum value
  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  // Function to search for a value in the AVL tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (root === null) return false;

    if (value < root.value) {
      return this.searchNode(root.left, value);
    } else if (value > root.value) {
      return this.searchNode(root.right, value);
    } else {
      return true;
    }
  }

  // Utility function to print the AVL tree in-order
  printInOrder(node) {
    if (node !== null) {
      this.printInOrder(node.left);
      console.log(node.value);
      this.printInOrder(node.right);
    }
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.printInOrder(); // Output: 10 20 30
avlTree.delete(20);
avlTree.printInOrder(); // Output: 10 30
console.log(avlTree.search(30)); // Output: true
console.log(avlTree.search(40)); // Output: false
