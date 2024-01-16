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

  // Method to insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive helper method to insert a value
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

  // Method to search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Recursive helper method to search for a value
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // Method to traverse the BST in-order (left-root-right)
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Recursive helper method for in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log('In-order traversal:');
bst.inOrderTraversal(value => {
  console.log(value);
});

console.log('Search 15:', bst.search(15)); // true
console.log('Search 8:', bst.search(8));   // false
