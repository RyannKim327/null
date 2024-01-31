class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // Helper method to insert a value into the tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  // Recursive helper method to perform the insertion
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  // Helper method to search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }
  
  // Recursive helper method to perform the search
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    
    if (value === node.value) {
      return true;
    }
    
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }
  
  // Helper method to traverse the tree in-order (left-root-right)
  inorderTraversal() {
    this.inorderTraversalNode(this.root);
  }
  
  // Recursive helper method to perform the in-order traversal
  inorderTraversalNode(node) {
    if (node !== null) {
      this.inorderTraversalNode(node.left);
      console.log(node.value);
      this.inorderTraversalNode(node.right);
    }
  }
}

// Example usage:
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(1);
binaryTree.inorderTraversal(); // Outputs: 1 3 5 7
console.log(binaryTree.search(7)); // Outputs: true
console.log(binaryTree.search(4)); // Outputs: false
