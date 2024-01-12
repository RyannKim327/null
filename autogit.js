// AVL Node class
class AVLNode {
  constructor(value) {
    this.value = value;
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
    if (!node) return 0;
    return node.height;
  }
  
  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
  
  // Perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
    return newRoot;
  }
  
  // Perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
    return newRoot;
  }
  
  // Insert a value into the tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }
  
  insertNode(node, value) {
    if (!node) return new AVLNode(value);
    
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL trees
      return node;
    }
    
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    const balanceFactor = this.getBalanceFactor(node);
    
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }
    
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }
    
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
    
    return node;
  }
  
  // Pre-order traversal of the tree
  preOrder(node) {
    if (!node) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  
  // In-order traversal of the tree
  inOrder(node) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  
  // Post-order traversal of the tree
  postOrder(node) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);
avlTree.inOrder(avlTree.root);
