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

  // Method to insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a value
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

  // Method to search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a value
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Method to perform in-order traversal of the BST
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

console.log(bst.search(5)); // Output: true
console.log(bst.search(20)); // Output: false

bst.inOrderTraversal(value => console.log(value)); // Output: 2, 5, 7, 10, 15
