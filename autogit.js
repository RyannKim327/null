// Class for a single node in the Red-Black Tree
class RBTreeNode {
  constructor(value, color, parent, left, right) {
    this.value = value;       // Value stored in the node
    this.color = color;       // Color of the node (either 'red' or 'black')
    this.parent = parent;     // Reference to the parent node
    this.left = left;         // Reference to the left child node
    this.right = right;       // Reference to the right child node
  }
}

// Class for the Red-Black Tree
class RedBlackTree {
  constructor() {
    this.root = null;         // Reference to the root node of the tree
  }
  
  // Method to insert a value into the tree
  insert(value) {
    const newNode = new RBTreeNode(value, 'red');
  
    // If the tree is empty, make the new node as the root and color it black
    if (this.root === null) {
      newNode.color = 'black';
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // If the value is lesser, go left
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        }
        // If the value is greater or equal, go right
        else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
      this.fixInsertionViolation(newNode);
    }
  }
  
  // Method to fix the Red-Black Tree property violations after inserting a node
  fixInsertionViolation(node) {
    while (node && node !== this.root && node.parent.color === 'red') {
      let uncle;
      if (node.parent === node.parent.parent.left) {
        // Parent is a left child, uncle is the right child of the grandparent
        uncle = node.parent.parent.right;
  
        // Case 1: Uncle is red - Recolor and move up to the grandparent
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        }
        else {
          // Case 2: Uncle is black and node is a right child - Rotate left and convert to Case 3
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
  
          // Case 3: Uncle is black and node is a left child - Recolor and rotate right
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        // Parent is a right child, uncle is the left child of the grandparent
        uncle = node.parent.parent.left;
  
        // Case 1: Uncle is red - Recolor and move up to the grandparent
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        }
        else {
          // Case 2: Uncle is black and node is a left child - Rotate right and convert to Case 3
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
  
          // Case 3: Uncle is black and node is a right child - Recolor and rotate left
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    // Color the root node black
    if (this.root) {
      this.root.color = 'black';
    }
  }
  
  // Method to perform a left rotation on a node
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
  
    if (rightChild.left) {
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
  }
  
  // Method to perform a right rotation on a node
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
  
    if (leftChild.right) {
      leftChild.right.parent = node;
    }
  
    leftChild.parent = node.parent;
  
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }
  
    leftChild.right = node;
    node.parent = leftChild;
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(12);
tree.insert(18);
