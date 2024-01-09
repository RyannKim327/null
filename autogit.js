class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'black'; // 'red' or 'black'
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }
}
RedBlackTree.prototype.insert = function(value) {
  const newNode = new Node(value);

  // If tree is empty, make new node as root and color it black
  if (this.root === null) {
    this.root = newNode;
    newNode.color = 'black';
    return;
  }

  let node = this.root;
  let parent = null;

  while (node !== null) {
    parent = node;

    // If the value is less than current node, go to left subtree
    if (value < node.value) {
      node = node.left;
    }
    // If the value is greater than current node, go to right subtree
    else if (value > node.value) {
      node = node.right;
    }
    // If the value already exists, just return
    else {
      return;
    }
  }

  newNode.parent = parent;

  // Set newNode as the left or right child of the parent
  if (value < parent.value) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }

  // Perform the necessary rotations and recoloring
  this.fixInsertionIssues(newNode);
};
RedBlackTree.prototype.fixInsertionIssues = function(node) {
  while (node.parent !== null && node.parent.color === 'red') {
    let parent = node.parent;
    let grandParent = parent.parent;

    // Case 1: Parent is a left child of grandparent
    if (grandParent.left === parent) {
      const uncle = grandParent.right;

      // Case 1.1: Uncle is red, color parent and uncle black,
      // grandparent becomes red, and move to grandparent
      if (uncle !== null && uncle.color === 'red') {
        parent.color = 'black';
        uncle.color = 'black';
        grandParent.color = 'red';
        node = grandParent;
      }
      // Case 1.2: Uncle is black or absent
      else {
        // Case 1.2.1: Node is a right child, rotate left
        if (parent.right === node) {
          this.rotateLeft(parent);
          node = parent;
          parent = node.parent;
        }

        // Case 1.2.2: Node is a left child, rotate right and recolor
        parent.color = 'black';
        grandParent.color = 'red';
        this.rotateRight(grandParent);
      }
    }
    // Case 2: Parent is a right child of grandparent
    else {
      const uncle = grandParent.left;

      // Case 2.1: Uncle is red, color parent and uncle black,
      // grandparent becomes red, and move to grandparent
      if (uncle !== null && uncle.color === 'red') {
        parent.color = 'black';
        uncle.color = 'black';
        grandParent.color = 'red';
        node = grandParent;
      }
      // Case 2.2: Uncle is black or absent
      else {
        // Case 2.2.1: Node is a left child, rotate right
        if (parent.left === node) {
          this.rotateRight(parent);
          node = parent;
          parent = node.parent;
        }

        // Case 2.2.2: Node is a right child, rotate left and recolor
        parent.color = 'black';
        grandParent.color = 'red';
        this.rotateLeft(grandParent);
      }
    }
  }

  // Ensure the root node is always black
  this.root.color = 'black';
};
RedBlackTree.prototype.rotateLeft = function(node) {
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
RedBlackTree.prototype.rotateRight = function(node) {
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
