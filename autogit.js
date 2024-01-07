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

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // Other methods like remove, findMin, findMax, etc. can be added

  // Helper method to print the tree in order
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(40)); // Output: true
console.log(bst.search(90)); // Output: false

bst.inOrderTraversal(bst.root); // Output: 20, 30, 40, 50, 60, 70, 80
