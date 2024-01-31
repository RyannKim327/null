class Node {
  constructor(value, color, left, right, parent) {
    this.value = value;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Implement necessary operations here
}
insert(value) {
  const newNode = new Node(value, "red", null, null, null);
  
  if (!this.root) {
    // First insertion, root must be black
    newNode.color = "black";
    this.root = newNode;
  } else {
    let node = this.root;
    
    while (node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          newNode.parent = node;
          break;
        }
        node = node.left;
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          newNode.parent = node;
          break;
        }
        node = node.right;
      } else {
        // The value already exists in the tree
        return;
      }
    }
    
    this.balanceAfterInsert(newNode);
  }
}
balanceAfterInsert(node) {
  while (node.parent && node.parent.color === "red") {
    if (node.parent === node.parent.parent.left) {
      const uncle = node.parent.parent.right;
  
      if (uncle && uncle.color === "red") {
        // Case 1: Uncle is red
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.right) {
          // Case 2: Uncle is black, node is a right child
          node = node.parent;
          this.rotateLeft(node);
        }
  
        // Case 3: Uncle is black, node is a left child
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rotateRight(node.parent.parent);
      }
    } else {
      const uncle = node.parent.parent.left;
  
      if (uncle && uncle.color === "red") {
        // Case 1: Uncle is red
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.left) {
          // Case 2: Uncle is black, node is a left child
          node = node.parent;
          this.rotateRight(node);
        }
  
        // Case 3: Uncle is black, node is a right child
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rotateLeft(node.parent.parent);
      }
    }
  }
  
  // Root must always be black
  this.root.color = "black";
}
rotateLeft(node) {
  const rightChild = node.right;
  node.right = rightChild.left;
  
  if (rightChild.left) {
    rightChild.left.parent = node;
  }
  
  rightChild.parent = node.parent;
  
  if (!node.parent) {
    this.root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }
  
  rightChild.left = node;
  node.parent = rightChild;
}

rotateRight(node) {
  const leftChild = node.left;
  node.left = leftChild.right;
  
  if (leftChild.right) {
    leftChild.right.parent = node;
  }
  
  leftChild.parent = node.parent;
  
  if (!node.parent) {
    this.root = leftChild;
  } else if (node === node.parent.left) {
    node.parent.left = leftChild;
  } else {
    node.parent.right = leftChild;
  }
  
  leftChild.right = node;
  node.parent = leftChild;
}
