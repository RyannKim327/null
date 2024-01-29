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

  diameter() {
    if (!this.root) {
      return 0;
    }

    let diameter = 0;

    const calculateHeight = (node) => {
      if (!node) {
        return 0;
      }

      const leftHeight = calculateHeight(node.left);
      const rightHeight = calculateHeight(node.right);

      // calculate the diameter passing through this node
      diameter = Math.max(diameter, leftHeight + rightHeight);

      // return the height of the subtree rooted at this node
      return 1 + Math.max(leftHeight, rightHeight);
    };

    calculateHeight(this.root);

    return diameter;
  }
}

// Example usage:
const tree = new BinaryTree();

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

console.log(tree.diameter()); // Output: 5
