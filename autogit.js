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

  // Helper method to create a new node
  createNode(value) {
    return new Node(value);
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = this.createNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive method to insert a node into the binary tree
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

  // Perform an in-order traversal of the binary tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Recursive method for in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // Perform a pre-order traversal of the binary tree
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // Recursive method for pre-order traversal
  preOrderTraversalNode(node, callback) {
    if (node) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // Perform a post-order traversal of the binary tree
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // Recursive method for post-order traversal
  postOrderTraversalNode(node, callback) {
    if (node) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
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

// In-order traversal: 1, 3, 6, 8, 10, 14
tree.inOrderTraversal(value => console.log(value));

// Pre-order traversal: 8, 3, 1, 6, 10, 14
tree.preOrderTraversal(value => console.log(value));

// Post-order traversal: 1, 6, 3, 14, 10, 8
tree.postOrderTraversal(value => console.log(value));
