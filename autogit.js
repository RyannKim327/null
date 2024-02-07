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
    return null;
  }

  if (value < node.value) {
    return this.searchNode(node.left, value);
  } else if (value > node.value) {
    return this.searchNode(node.right, value);
  } else {
    return node;
  }
}
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);

console.log(bst.search(12));  // Output: Node { value: 12, left: null, right: null }
console.log(bst.search(17));  // Output: null
