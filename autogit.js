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
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this._searchNode(node.left, value);
    } else if (value > node.value) {
      return this._searchNode(node.right, value);
    } else {
      return true;
    }
  }
}

// Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree.search(5)); // Output: true
console.log(tree.search(20)); // Output: false
