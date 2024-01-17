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

  // Traverse in-order: left -> root -> right
  inOrderTraversal(node = this.root, callback) {
    if (node) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }

  // Traverse pre-order: root -> left -> right
  preOrderTraversal(node = this.root, callback) {
    if (node) {
      callback(node.value);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  // Traverse post-order: left -> right -> root
  postOrderTraversal(node = this.root, callback) {
    if (node) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node.value);
    }
  }
}
const binaryTree = new BinaryTree();

binaryTree.insert(4);
binaryTree.insert(2);
binaryTree.insert(6);
binaryTree.insert(1);
binaryTree.insert(3);
binaryTree.insert(5);
binaryTree.insert(7);

console.log("In-order traversal:");
binaryTree.inOrderTraversal((value) => console.log(value));

console.log("Pre-order traversal:");
binaryTree.preOrderTraversal((value) => console.log(value));

console.log("Post-order traversal:");
binaryTree.postOrderTraversal((value) => console.log(value));
