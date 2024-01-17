// Class representing a node in the binary search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Class representing the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive helper method to insert a node
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

  // Recursive helper method to search for a node
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

  // Method to perform an in-order traversal of the tree
  inOrderTraversal() {
    this.inOrderTraversalNode(this.root);
  }

  // Recursive helper method to perform in-order traversal
  inOrderTraversalNode(node) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left);
      console.log(node.value);
      this.inOrderTraversalNode(node.right);
    }
  }
}

// Usage:
const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

console.log(tree.search(6)); // Output: true
console.log(tree.search(11)); // Output: false

tree.inOrderTraversal();
// Output:
// 1
// 3
// 4
// 6
// 7
// 8
// 10
// 13
// 14
