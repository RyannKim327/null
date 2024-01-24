// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // helper method to insert a node in BST
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // recursively insert a node in BST
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // insert in the left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // insert in the right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // helper method to perform in-order traversal
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // recursively perform in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // helper method to perform pre-order traversal
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // recursively perform pre-order traversal
  preOrderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // helper method to perform post-order traversal
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // recursively perform post-order traversal
  postOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }

  // method to search for a node in BST
  search(value) {
    return this.searchNode(this.root, value);
  }
  
  // recursively search for a node in BST
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
}

// Usage example
const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);

console.log("In-order traversal:");
bst.inOrderTraversal((value) => console.log(value));

console.log("Pre-order traversal:");
bst.preOrderTraversal((value) => console.log(value));

console.log("Post-order traversal:");
bst.postOrderTraversal((value) => console.log(value));

console.log("Search for value 6:", bst.search(6));
console.log("Search for value 10:", bst.search(10));
