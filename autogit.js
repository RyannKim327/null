// Node class representing a node in the red-black tree
class Node {
  constructor(value, color) {
    this.value = value;         // Node value
    this.left = null;           // Left child
    this.right = null;          // Right child
    this.parent = null;         // Parent node
    this.color = color;         // Color of the node (red or black)
  }
}

// Red-Black Tree implementation
class RedBlackTree {
  constructor() {
    this.root = null;           // Root node of the tree
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value, 'red');
    if (!this.root) {
      // If the tree is empty, make the new node the root and color it black
      this.root = newNode;
      this.root.color = 'black';
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          // If value is less than current node, go left
          if (!currentNode.left) {
            // If left child is null, insert new node as left child
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          // If value is greater than or equal to current node, go right
          if (!currentNode.right) {
            // If right child is null, insert new node as right child
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
      this.fixTreeProperties(newNode);
    }
  }

  // Fix any violations of the red-black tree properties after insertion
  fixTreeProperties(node) {
    while (node !== this.root && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'red') {
          // Case 1: Uncle is red, recolor parent, uncle, and grandparent
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black and node is right child, left rotate parent
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Uncle is black and node is left child, recolor parent and grandparent, right rotate grandparent
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === 'red') {
          // Case 1: Uncle is red, recolor parent, uncle, and grandparent
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Uncle is black and node is left child, right rotate parent
            node = node.parent;
            this.rightRotate(node);
          }
          // Case 3: Uncle is black and node is right child, recolor parent and grandparent, left rotate grandparent
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  // Left rotate a given node
  leftRotate(node) {
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
  }

  // Right rotate a given node
  rightRotate(node) {
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
  }
}
