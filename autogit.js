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

  // Method to insert a new value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode; // If the tree is empty, make the new node the root
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a new value in the correct position
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

  // Method to search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a value
  searchNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // Method to perform an in-order traversal of the tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform an in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}

// Usage example:
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(9);
bst.inOrderTraversal(value => console.log(value)); // Output: 1 3 4 5 6 7 9
console.log(bst.search(6)); // Output: Node { value: 6, left: null, right: null }
