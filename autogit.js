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

  // Method to insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive method to insert a value into a subtree
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

  // Method to search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Recursive method to search for a value in a subtree
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

  // Method to remove a value from the tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Recursive method to remove a value from a subtree
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
        return node;
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

  // Method to find the minimum value node in a subtree
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // Method to traverse the tree in-order (left-root-right)
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Recursive method to traverse the tree in-order
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.insert(9);

console.log(bst.search(5)); // Output: true
console.log(bst.search(10)); // Output: false

bst.remove(5);
bst.inOrderTraversal(value => {
  console.log(value); // Output: 2 4 6 7 8 9
});
