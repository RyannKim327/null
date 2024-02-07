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

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

  // Other methods such as search, delete, traverse, etc.
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.root); // The root node of the binary tree
console.log(tree.root.left); // The left child of the root node
console.log(tree.root.right); // The right child of the root node
