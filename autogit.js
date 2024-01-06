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

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node recursively
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

  // Search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to search for a value recursively
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

  // Helper method to traverse the tree in-order
  inOrderTraversal(node, visit) {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node.value);
      this.inOrderTraversal(node.right, visit);
    }
  }

  // Get all values in the tree in-order
  getValuesInOrder() {
    const values = [];
    this.inOrderTraversal(this.root, value => values.push(value));
    return values;
  }
}
const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.search(6));  // Output: true
console.log(bst.search(9));  // Output: false

console.log(bst.getValuesInOrder());  // Output: [2, 3, 4, 5, 6, 7, 8]
