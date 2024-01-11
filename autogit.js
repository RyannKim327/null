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

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node || node.value === value) {
      return node;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    }
    return this.searchNode(node.right, value);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) {
      return null;
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minRightNode = this.findMinNode(node.right);
        node.value = minRightNode.value;
        node.right = this.deleteNode(node.right, minRightNode.value);
        return node;
      }
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  // Other helper methods can be added as needed

  // Example method: inorder traversal
  inorder() {
    const result = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  inorderTraversal(node, result) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
  }
}
const tree = new BinaryTree();

tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

console.log(tree.inorder()); // [20, 30, 40, 50, 60, 70, 80]

console.log(tree.search(40)); // returns the node with value 40

tree.delete(40);
console.log(tree.inorder()); // [20, 30, 50, 60, 70, 80]
