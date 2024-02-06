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
}
class BinarySearchTree {
  // ...

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
}
class BinarySearchTree {
  // ...

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      // Value not found
      return false;
    }

    if (value === node.value) {
      // Value found
      return true;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);

console.log(bst.search(3)); // true
console.log(bst.search(5)); // false
