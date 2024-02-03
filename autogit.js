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
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value);
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
      if (node.left === null && node.right === null) {
        node = null;
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  inorderTraversal(callback) {
    this.inorderTraversalNode(this.root, callback);
  }

  inorderTraversalNode(node, callback) {
    if (node !== null) {
      this.inorderTraversalNode(node.left, callback);
      callback(node.value);
      this.inorderTraversalNode(node.right, callback);
    }
  }
}
const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);

console.log("Inorder Traversal:");
bst.inorderTraversal(value => console.log(value));

console.log("Search 6:", bst.search(6));
console.log("Search 9:", bst.search(9));

bst.remove(3);

console.log("Inorder Traversal after removing 3:");
bst.inorderTraversal(value => console.log(value));
