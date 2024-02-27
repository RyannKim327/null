// Define a TreeNode object
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define a BinarySearchTree object
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary search tree
  insert(value) {
    const newNode = new TreeNode(value);

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

  // Search for a value in the binary search tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
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

  // Inorder traversal - returns the values in sorted order
  inorder() {
    return this.inorderTraversal(this.root, []);
  }

  inorderTraversal(node, result) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }

    return result;
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log(bst.search(6)); // Output: true
console.log(bst.search(11)); // Output: false

console.log(bst.inorder()); // Output: [1, 3, 6, 8, 10, 14]
