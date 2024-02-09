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
  
  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }
  
  // Recursive function to insert a value into the AVL tree
  _insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }
    
    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }
    
    // Update the height of the node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    
    // Perform rotation and balancing
    node = this._balanceNode(node);
    
    return node;
  }
  
  // Get the height of a node
  _getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }
  
  // Perform rotation and balancing of a node
  _balanceNode(node) {
    // Left rotation
    if (this._getBalanceFactor(node) > 1) {
      if (this._getBalanceFactor(node.left) < 0) {
        node.left = this._rotateLeft(node.left);
      }
      node = this._rotateRight(node);
    }
    
    // Right rotation
    else if (this._getBalanceFactor(node) < -1) {
      if (this._getBalanceFactor(node.right) > 0) {
        node.right = this._rotateRight(node.right);
      }
      node = this._rotateLeft(node);
    }
    
    return node;
  }
  
  // Get the balance factor of a node
  _getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this._getHeight(node.left) - this._getHeight(node.right);
  }
  
  // Perform a left rotation
  _rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    return newRoot;
  }
  
  // Perform a right rotation
  _rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    return newRoot;
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
console.log(avlTree);
