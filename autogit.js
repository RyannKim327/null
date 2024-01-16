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
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Node found
      if (node.left === null && node.right === null) {
        // No children
        node = null;
        return node;
      }

      if (node.left === null) {
        // Only right child
        node = node.right;
        return node;
      } else if (node.right === null) {
        // Only left child
        node = node.left;
        return node;
      }

      // Two children
      const minRight = this.findMinNode(node.right);
      node.value = minRight.value;
      node.right = this.removeNode(node.right, minRight.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inorder() {
    this.inorderTraversal(this.root);
  }

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  preorder() {
    this.preorderTraversal(this.root);
  }

  preorderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  }

  postorder() {
    this.postorderTraversal(this.root);
  }

  postorderTraversal(node) {
    if (node !== null) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      console.log(node.value);
    }
  }
}
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
console.log(bst.search(6)); // Output: true
console.log(bst.search(11)); // Output: false
bst.remove(3);
bst.inorder(); // Output: 1 4 6 7 8 10 13 14
