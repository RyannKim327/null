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

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    // If tree is empty, set new node as root
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node
  insertNode(node, newNode) {
    // If value is less than current node, go left
    if (newNode.value < node.value) {
      if (node.left === null) {
        // If left child is null, insert new node
        node.left = newNode;
      } else {
        // If left child is not null, recursively insert on left subtree
        this.insertNode(node.left, newNode);
      }
    }
    // If value is greater than current node, go right
    else if (newNode.value > node.value) {
      if (node.right === null) {
        // If right child is null, insert new node
        node.right = newNode;
      } else {
        // If right child is not null, recursively insert on right subtree
        this.insertNode(node.right, newNode);
      }
    }
    // If value is equal to current node, ignore it (no duplicates in BST)
  }

  // Search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a node
  searchNode(node, value) {
    if (node === null) {
      return false; // Value not found
    } else if (value < node.value) {
      // If value is less than current node, search on left subtree
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      // If value is greater than current node, search on right subtree
      return this.searchNode(node.right, value);
    } else {
      return true; // Value found
    }
  }

  // Traverse the tree in-order (left-root-right)
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively traverse the tree in-order
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
// Create a new instance of the BinarySearchTree class
const bst = new BinarySearchTree();

// Insert values into the tree
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

// Search for a value
console.log(bst.search(4)); // Output: true
console.log(bst.search(6)); // Output: false

// Traverse the tree in-order
bst.inOrderTraversal((value) => console.log(value)); // Output: 1 3 4 5 7
