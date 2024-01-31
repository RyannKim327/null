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

  // Recursive function to calculate the height of a binary tree
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Recursive function to calculate the diameter of a binary tree
  getDiameter(node) {
    if (node === null) {
      return 0;
    }
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    const leftDiameter = this.getDiameter(node.left);
    const rightDiameter = this.getDiameter(node.right);

    // Return the maximum diameter among left subtree, right subtree, and the longest path through the current root node
    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
  }
}

// Example usage:
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

console.log("Diameter of the binary tree:", tree.getDiameter(tree.root));
