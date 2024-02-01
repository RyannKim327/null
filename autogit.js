class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

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

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

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

  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  preOrderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  postOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }
}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);

console.log(bst.search(7)); // Output: true

bst.inOrderTraversal(value => console.log(value)); // Output: 2 5 7 10 12 15
