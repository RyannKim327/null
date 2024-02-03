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

  // Function to insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to insert a node into the tree
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

  // Function to search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to search for a value in the tree
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

  // Function to remove a value from the tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper function to remove a value from the tree
  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Case 1: No child nodes
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      
      // Case 2: One child node
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      
      // Case 3: Two child nodes
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  // Helper function to find the node with the minimum value
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // Function to get the root of the tree
  getRoot() {
    return this.root;
  }

  // Helper function for in-order traversal (left, root, right)
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }

  // Function to perform in-order traversal of the tree
  inOrder(callback) {
    this.inOrderTraversal(this.root, callback);
  }

  // Helper function for pre-order traversal (root, left, right)
  preOrderTraversal(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  // Function to perform pre-order traversal of the tree
  preOrder(callback) {
    this.preOrderTraversal(this.root, callback);
  }

  // Helper function for post-order traversal (left, right, root)
  postOrderTraversal(node, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node.value);
    }
  }

  // Function to perform post-order traversal of the tree
  postOrder(callback) {
    this.postOrderTraversal(this.root, callback);
  }
}
// Example usage
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

tree.inOrder(value => console.log(value));
// Output: 1, 3, 4, 6, 7, 8, 10, 13, 14

console.log(tree.search(6));
// Output: true

tree.remove(6);
tree.inOrder(value => console.log(value));
// Output: 1, 3, 4, 7, 8, 10, 13, 14
