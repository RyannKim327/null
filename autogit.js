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

    // If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // If the new value is less than the current node, go to the left subtree
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    // If the new value is greater than the current node, go to the right subtree
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal of the binary tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(9);

binaryTree.inOrderTraversal(value => console.log(value));
2
3
4
5
7
8
9
