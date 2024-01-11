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

  // Insert a new value into the tree
  insert(value) {
    const newNode = new Node(value);

    // If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to recursively insert a node
  insertNode(node, newNode) {
    // If the new value is less than the current node, go left
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    // If the new value is greater than the current node, go right
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to recursively search for a node
  searchNode(node, value) {
    // If the tree is empty or the value is found at the current node, return the node
    if (node === null || node.value === value) {
      return node;
    }

    // If the value is less than the current node, search the left subtree
    if (value < node.value) {
      return this.searchNode(node.left, value);
    }

    // If the value is greater than the current node, search the right subtree
    return this.searchNode(node.right, value);
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(60)); // found
console.log(bst.search(55)); // not found
