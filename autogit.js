class Node {
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

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node
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

  // Method to perform an in-order traversal of the binary tree
  inOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }

  // Method to perform a pre-order traversal of the binary tree
  preOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  // Method to perform a post-order traversal of the binary tree
  postOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node.value);
    }
  }

  // Method to search for a value in the binary tree
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

  // Method to remove a value from the binary tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper method to recursively remove a node
  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  // Helper method to find the node with the minimum value
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
}
const tree = new BinaryTree();

tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

console.log("In-order traversal:");
tree.inOrderTraversal(console.log); // Prints: 1 3 4 6 7 8 10 13 14

console.log("Pre-order traversal:");
tree.preOrderTraversal(console.log); // Prints: 8 3 1 6 4 7 10 14 13

console.log("Post-order traversal:");
tree.postOrderTraversal(console.log); // Prints: 1 4 7 6 3 13 14 10 8

console.log("Search for value 6:", tree.search(6)); // Returns: Node { value: 6, left: Node { ... }, right: Node { ... } }

tree.remove(6);
console.log("Search for value 6 after removal:", tree.search(6)); // Returns: null
