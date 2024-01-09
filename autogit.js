// AVL Tree Node class
class AVLNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVL Tree class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Perform a right rotation around the given node
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);
  
    return newRoot;
  }

  // Perform a left rotation around the given node
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform necessary rotations to balance the tree
  balance(node) {
    if (this.getBalanceFactor(node) > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
      return this.rotateRight(node);
    }
    
    if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
      return this.rotateLeft(node);
    }
    
    return node;
  }

  // Insert a key into the tree
  insert(key) {
    this.root = this._insertNode(this.root, key);
  }

  _insertNode(node, key) {
    if (node === null) return new AVLNode(key);

    if (key < node.key) {
      node.left = this._insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this._insertNode(node.right, key);
    } else {
      // Duplicate keys are not allowed in AVL tree
      return node;
    }

    this.updateHeight(node);
    return this.balance(node);
  }

  // Perform an inorder traversal of the tree
  inorder() {
    this._inorderTraversal(this.root);
  }

  _inorderTraversal(node) {
    if (node !== null) {
      this._inorderTraversal(node.left);
      console.log(node.key);
      this._inorderTraversal(node.right);
    }
  }
}

// Usage
const tree = new AVLTree();
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(20);

tree.inorder();
