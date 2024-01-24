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

  // Get the height of a node
  height(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  balanceFactor(node) {
    if (node === null) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // Rotate a subtree to the left
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
    rightChild.left = node;
    this.updateHeight(node);
    this.updateHeight(rightChild);
    return rightChild; // Return the new root
  }

  // Rotate a subtree to the right
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    leftChild.right = node;
    this.updateHeight(node);
    this.updateHeight(leftChild);
    return leftChild; // Return the new root
  }

  // Balance a node and its children
  balance(node) {
    this.updateHeight(node);

    if (this.balanceFactor(node) > 1) {
      if (this.balanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }

    if (this.balanceFactor(node) < -1) {
      if (this.balanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return this.balance(node);
  }

  // Traverse the tree in-order
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  inOrderTraversalNode(node, callback) {
    if (node === null) return;
    this.inOrderTraversalNode(node.left, callback);
    callback(node.value);
    this.inOrderTraversalNode(node.right, callback);
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(20);
avlTree.insert(9);
avlTree.insert(7);

avlTree.inOrderTraversal((value) => console.log(value));
