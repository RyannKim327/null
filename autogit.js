function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
BinarySearchTree.prototype.insert = function(value) {
  var newNode = new Node(value);

  if (this.root === null) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
}

function insertNode(node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

BinarySearchTree.prototype.search = function(value) {
  return searchNode(this.root, value);
}

function searchNode(node, value) {
  if (node === null) {
    return false;
  }

  if (value === node.value) {
    return true;
  } else if (value < node.value) {
    return searchNode(node.left, value);
  } else {
    return searchNode(node.right, value);
  }
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(8);
binarySearchTree.insert(3);
binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.insert(6);

console.log(binarySearchTree.search(6)); // Output: true
console.log(binarySearchTree.search(9)); // Output: false
