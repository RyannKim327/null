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
    this.leafCount = 0;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

  countLeafNodes() {
    if (!this.root) {
      return 0;
    }

    this.countLeafNodesRecursive(this.root);
    return this.leafCount;
  }

  countLeafNodesRecursive(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      this.leafCount++;
    }

    this.countLeafNodesRecursive(node.left);
    this.countLeafNodesRecursive(node.right);
  }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.addNode(10);
binaryTree.addNode(5);
binaryTree.addNode(15);
binaryTree.addNode(3);
binaryTree.addNode(7);
binaryTree.addNode(12);
binaryTree.addNode(18);

console.log("Number of leaf nodes: ", binaryTree.countLeafNodes());
