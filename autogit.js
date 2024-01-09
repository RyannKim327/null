// Node class represents each node in the binary search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class represents the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to recursively insert a node
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

  // Search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to recursively search for a node
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

  // In-order traversal of the BST (returns an array of sorted values)
  inorderTraversal() {
    const result = [];
    this.inorderTraversalNode(this.root, result);
    return result;
  }

  // Helper function to recursively perform in-order traversal
  inorderTraversalNode(node, result) {
    if (node !== null) {
      this.inorderTraversalNode(node.left, result);
      result.push(node.value);
      this.inorderTraversalNode(node.right, result);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(bst.search(6)); // true
console.log(bst.search(9)); // false

console.log(bst.inorderTraversal()); // [1, 3, 4, 6, 7, 8, 10, 13, 14]
