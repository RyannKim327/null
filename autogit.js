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

  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.value) {
      root.left = this._insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._insertNode(root.right, value);
    } else {
      // Duplicate values not allowed
      return root;
    }
    
    this.updateHeight(root);

    const balanceFactor = this.getBalanceFactor(root);

    // Left Left case
    if (balanceFactor > 1 && value < root.left.value) {
      return this.rotateRight(root);
    }

    // Right Right case
    if (balanceFactor < -1 && value > root.right.value) {
      return this.rotateLeft(root);
    }

    // Left Right case
    if (balanceFactor > 1 && value > root.left.value) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left case
    if (balanceFactor < -1 && value < root.right.value) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  inOrderTraversal(root = this.root) {
    if (root === null) return [];

    const result = [];
    const stack = [];

    let currentNode = root;

    while (currentNode !== null || stack.length > 0) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      result.push(currentNode.value);

      currentNode = currentNode.right;
    }

    return result;
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 30, 40, 50]
