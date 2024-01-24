// Define the class for Tree Nodes
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the class for Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Helper method to insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive method to insert a value into the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Helper method to check if a value exists in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Recursive method to search for a value in the tree
  searchNode(node, value) {
    if (!node) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // value found
    }
  }

  // Helper method to remove a value from the tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Recursive method to remove a value from the tree
  removeNode(node, value) {
    if (!node) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Case 1: No child nodes
      if (!node.left && !node.right) {
        node = null;
        return node;
      }

      // Case 2: One child node
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      // Case 3: Two child nodes
      const minRightNode = this.getMinValueNode(node.right);
      node.value = minRightNode.value;
      node.right = this.removeNode(node.right, minRightNode.value);
      return node;
    }
  }

  // Helper method to get the minimum value node in a subtree
  getMinValueNode(node) {
    if (!node || !node.left) {
      return node;
    }
    return this.getMinValueNode(node.left);
  }

  // Helper method to perform an in-order traversal of the tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Recursive method to perform an in-order traversal of the tree
  inOrderTraversalNode(node, callback) {
    if (node) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // Helper method to perform a pre-order traversal of the tree
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // Recursive method to perform a pre-order traversal of the tree
  preOrderTraversalNode(node, callback) {
    if (node) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // Helper method to perform a post-order traversal of the tree
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // Recursive method to perform a post-order traversal of the tree
  postOrderTraversalNode(node, callback) {
    if (node) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log(bst.search(6)); // Output: true
console.log(bst.search(11)); // Output: false

bst.remove(6);
console.log(bst.search(6)); // Output: false

bst.inOrderTraversal((value) => console.log(value)); // Output: 1, 3, 8, 10, 14
