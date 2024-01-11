function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
  this.color = "red"; // By default, all new nodes are inserted as red
}
function RedBlackTree() {
  this.root = null;
  
  // Implement various tree operations here
  // ...
}
RedBlackTree.prototype.leftRotate = function(node) {
  const rightChild = node.right;
  node.right = rightChild.left;

  if (rightChild.left !== null) {
    rightChild.left.parent = node;
  }

  rightChild.parent = node.parent;

  if (node.parent === null) {
    this.root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }

  rightChild.left = node;
  node.parent = rightChild;
};

RedBlackTree.prototype.rightRotate = function(node) {
  const leftChild = node.left;
  node.left = leftChild.right;

  if (leftChild.right !== null) {
    leftChild.right.parent = node;
  }

  leftChild.parent = node.parent;

  if (node.parent === null) {
    this.root = leftChild;
  } else if (node === node.parent.right) {
    node.parent.right = leftChild;
  } else {
    node.parent.left = leftChild;
  }

  leftChild.right = node;
  node.parent = leftChild;
};
RedBlackTree.prototype.insert = function(value) {
  const newNode = new Node(value);

  // Step 1: Insert the node as a regular binary search tree node
  let currentNode = this.root;
  let parent = null;

  while (currentNode !== null) {
    parent = currentNode;

    if (newNode.value < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  newNode.parent = parent;

  if (parent === null) {
    // The tree was empty
    this.root = newNode;
  } else if (newNode.value < parent.value) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }

  // Step 2: Fix the red-black tree properties
  this.insertFixup(newNode);
};
RedBlackTree.prototype.insertFixup = function(node) {
  while (node.parent !== null && node.parent.color === "red") {
    if (node.parent === node.parent.parent.left) {
      const uncle = node.parent.parent.right;

      if (uncle !== null && uncle.color === "red") {
        // Case 1: The uncle node is red
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.right) {
          // Case 2: The uncle node is black and the current node is a right child
          node = node.parent;
          this.leftRotate(node);
        }

        // Case 3: The uncle node is black and the current node is a left child
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rightRotate(node.parent.parent);
      }
    } else {
      const uncle = node.parent.parent.left;

      if (uncle !== null && uncle.color === "red") {
        // Case 1: The uncle node is red
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.left) {
          // Case 2: The uncle node is black and the current node is a left child
          node = node.parent;
          this.rightRotate(node);
        }

        // Case 3: The uncle node is black and the current node is a right child
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.leftRotate(node.parent.parent);
      }
    }
  }
  
  this.root.color = "black"; // Ensure that the root is always black
};
