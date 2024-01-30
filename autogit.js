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

  // Method to insert a value into the binary tree
  insert(value) {
    // If the tree is empty, create a new node and set it as the root
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._insertNode(this.root, value);
    }
  }

  // Private helper method to recursively insert a value into the tree
  _insertNode(node, value) {
    if (value < node.value) {
      // If the value is less than the current node, go to the left subtree
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this._insertNode(node.left, value);
      }
    } else {
      // If the value is greater than or equal to the current node, go to the right subtree
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this._insertNode(node.right, value);
      }
    }
  }

  // Method to traverse the tree in-order (left, root, right)
  inOrderTraversal() {
    this._inOrder(this.root);
  }

  // Private helper method to recursively perform in-order traversal
  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      console.log(node.value);
      this._inOrder(node.right);
    }
  }
}
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

tree.inOrderTraversal(); // Outputs: 2, 3, 4, 5, 6, 7, 8
