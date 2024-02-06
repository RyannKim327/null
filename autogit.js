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
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  traverseInOrder() {
    this.inOrder(this.root);
  }
  
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  traversePreOrder() {
    this.preOrder(this.root);
  }
  
  preOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  traversePostOrder() {
    this.postOrder(this.root);
  }
  
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}
const tree = new BinaryTree();
tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(5);
tree.insert(7);

console.log(tree.search(5)); // Output: true
console.log(tree.search(8)); // Output: false

console.log("In-order traversal:");
tree.traverseInOrder(); // Output: 1 2 3 4 5 6 7

console.log("Pre-order traversal:");
tree.traversePreOrder(); // Output: 4 2 1 3 6 5 7

console.log("Post-order traversal:");
tree.traversePostOrder(); // Output: 1 3 2 5 7 6 4
