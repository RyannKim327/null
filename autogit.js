class BinaryTreeNode {
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
    const node = new BinaryTreeNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(currentNode, value) {
    if (currentNode === null) {
      return false;
    }

    if (currentNode.value === value) {
      return true;
    }

    if (value < currentNode.value) {
      return this.searchNode(currentNode.left, value);
    } else {
      return this.searchNode(currentNode.right, value);
    }
  }

  traverseInOrder() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }
}
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);

console.log(tree.traverseInOrder()); // Output: [2, 3, 4, 5, 7]
console.log(tree.search(4)); // Output: true
console.log(tree.search(6)); // Output: false
