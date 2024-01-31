// Node definition
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary tree definition
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Recursive function to count leaf nodes
  countLeafNodes(node) {
    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return 1;
    }

    return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
  }

  // Wrapper function to initialize counting
  getLeafNodeCount() {
    return this.countLeafNodes(this.root);
  }
}

// Usage
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

const leafNodeCount = tree.getLeafNodeCount();
console.log("Leaf nodes count:", leafNodeCount);
