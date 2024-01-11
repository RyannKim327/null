// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'black'; // All nodes start as black
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.root.color = 'black'; // Root node is always black
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            newNode.parent = currentNode;
            currentNode.left = newNode;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            newNode.parent = currentNode;
            currentNode.right = newNode;
            break;
          }
        }
      }
      this.insertFixup(newNode);
    }
  }

  // Fix the tree after inserting a node
  insertFixup(node) {
    while (node.parent && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  // Left rotate a node
  leftRotate(node) {
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

  // Right rotate a node
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  // Traverse the tree in-order
  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Usage example
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);
tree.inOrderTraversal(tree.root);
