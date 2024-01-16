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

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      // Traverse the tree to find the appropriate position to insert the new node
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // If the new node value is less than the current node, go to the left subtree
      if (node.left === null) {
        // If there is no left child, set the new node as the left child
        node.left = newNode;
      } else {
        // Recursively traverse the left subtree
        this.insertNode(node.left, newNode);
      }
    } else {
      // If the new node value is greater than or equal to the current node, go to the right subtree
      if (node.right === null) {
        // If there is no right child, set the new node as the right child
        node.right = newNode;
      } else {
        // Recursively traverse the right subtree
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Other operations like search, delete, etc., can be implemented similarly
}
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(9);

console.log(tree.root);
