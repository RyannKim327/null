class TreeNode {
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

  // Method to insert a value into the tree
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a value in the tree
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

  // Method to perform a depth-first traversal (in-order)
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
const tree = new BinaryTree();

tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(8);

// Perform in-order traversal and log each value
tree.inOrderTraversal((value) => console.log(value));
5
7
8
10
15
