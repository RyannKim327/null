// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinaryTree class
class BinaryTree {
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

  // Recursive method to insert a value into a specific node
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

  // Recursive method to search for a value starting from a specific node
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(7)); // true
console.log(tree.search(12)); // false
