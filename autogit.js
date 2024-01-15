class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Helper method to create a new node
  createNode(value) {
    return new Node(value);
  }

  // Method to insert a value into the BST
  insert(value) {
    const newNode = this.createNode(value);

    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      // Traverse the tree to find the appropriate position to insert the new node
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // If the new node's value is less than the current node's value, go to the left subtree
      if (node.left === null) {
        // If the left child is null, insert the new node here
        node.left = newNode;
      } else {
        // Recursively traverse the left subtree
        this.insertNode(node.left, newNode);
      }
    } else {
      // If the new node's value is greater than or equal to the current node's value, go to the right subtree
      if (node.right === null) {
        // If the right child is null, insert the new node here
        node.right = newNode;
      } else {
        // Recursively traverse the right subtree
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method to search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a node
  searchNode(node, value) {
    if (node === null) {
      // If the node is null, the value is not found in the tree
      return false;
    }

    if (value < node.value) {
      // If the value is less than the current node's value, search in the left subtree
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      // If the value is greater than the current node's value, search in the right subtree
      return this.searchNode(node.right, value);
    } else {
      // If the value is equal to the current node's value, the node is found
      return true;
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

console.log(bst.search(7)); // Output: true
console.log(bst.search(20)); // Output: false
