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
  
  // Helper function to calculate the height of a node
  height(node) {
    if (node === null) return 0;
    return node.height;
  }
  
  // Helper function to calculate the balance factor of a node
  balanceFactor(node) {
    if (node === null) return 0;
    return this.height(node.left) - this.height(node.right);
  }
  
  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  
  // Helper function to perform the left rotation
  leftRotate(z) {
    const y = z.right;
    const T2 = y.left;
    
    // Perform rotation
    y.left = z;
    z.right = T2;
    
    // Update heights
    this.updateHeight(z);
    this.updateHeight(y);
    
    return y;
  }
  
  // Helper function to perform the right rotation
  rightRotate(z) {
    const y = z.left;
    const T3 = y.right;
    
    // Perform rotation
    y.right = z;
    z.left = T3;
    
    // Update heights
    this.updateHeight(z);
    this.updateHeight(y);
    
    return y;
  }
  
  // Helper function to rebalance the tree
  balance(node, value) {
    // Update the height of the node
    this.updateHeight(node);
    
    // Check balance factor and perform rotations if necessary
    const balanceFactor = this.balanceFactor(node);
    
    // Left Left Case
    if (balanceFactor > 1 && value < node.left.value)
      return this.rightRotate(node);
    
    // Right Right Case
    if (balanceFactor < -1 && value > node.right.value)
      return this.leftRotate(node);
    
    // Left Right Case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
    
    // Right Left Case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    
    return node;
  }
  
  // Helper function to insert a node recursively
  insertRec(node, value) {
    // Base case: node is null, create a new node
    if (node === null) return new Node(value);
    
    // Insert node recursively
    if (value < node.value) {
      node.left = this.insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertRec(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }
    
    // Balance the tree
    return this.balance(node, value);
  }
  
  // Public function to insert a value into the tree
  insert(value) {
    this.root = this.insertRec(this.root, value);
  }
  
  // Helper function to find the minimum value node in a subtree
  findMinNode(node) {
    let current = node;
    
    while (current.left !== null) {
      current = current.left;
    }
    
    return current;
  }
  
  // Helper function to delete a node recursively
  deleteRec(node, value) {
    // Base case: node is null
    if (node === null) return node;
    
    // Delete node recursively
    if (value < node.value) {
      node.left = this.deleteRec(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteRec(node.right, value);
    } else {
      // Node to be deleted found
      if (node.left === null || node.right === null) {
        // Node has no children or only one child
        const nextNode = node.left || node.right;
        node = null;
        return nextNode;
      } else {
        // Node has two children
        const nextNode = this.findMinNode(node.right);
        node.value = nextNode.value;
        node.right = this.deleteRec(node.right, nextNode.value);
      }
    }
    
    // Balance the tree
    return this.balance(node, value);
  }
  
  // Public function to delete a value from the tree
  delete(value) {
    this.root = this.deleteRec(this.root, value);
  }
  
  // Helper function to print the tree in-order
  inOrderRec(node) {
    if (node === null) return '';
    
    let result = '';
    result += this.inOrderRec(node.left);
    result += node.value + ' ';
    result += this.inOrderRec(node.right);
    
    return result;
  }
  
  // Public function to print the tree in-order
  inOrder() {
    return this.inOrderRec(this.root).trim();
  }
}
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(15);
avlTree.insert(20);
avlTree.insert(25);
console.log(avlTree.inOrder()); // Output: 5 10 15 20 25

avlTree.delete(15);
console.log(avlTree.inOrder()); // Output: 5 10 20 25
