// Create a TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create a BinarySearchTree class
class BinarySearchTree {
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

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  inorderTraversal() {
    const result = [];
    this.inorderTraversalNode(this.root, result);
    return result;
  }

  inorderTraversalNode(node, result) {
    if (node !== null) {
      this.inorderTraversalNode(node.left, result);
      result.push(node.value);
      this.inorderTraversalNode(node.right, result);
    }
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(bst.inorderTraversal()); // Output: [1, 3, 4, 6, 7, 8, 10, 13, 14]
console.log(bst.search(6)); // Output: true
console.log(bst.search(9)); // Output: false
