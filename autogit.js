class Node {
  constructor(key, value, color) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Helper function to perform left rotation
  leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left)
      rightChild.left.parent = node;

    rightChild.parent = node.parent;

    if (!node.parent)
      this.root = rightChild;
    else if (node === node.parent.left)
      node.parent.left = rightChild;
    else
      node.parent.right = rightChild;

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Helper function to perform right rotation
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right)
      leftChild.right.parent = node;

    leftChild.parent = node.parent;

    if (!node.parent)
      this.root = leftChild;
    else if (node === node.parent.right)
      node.parent.right = leftChild;
    else
      node.parent.left = leftChild;

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Helper function to fix violations after insertion
  fixInsertionViolation(node) {
    while (node !== this.root && node.parent.color === 'red') {
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

  // Helper function to insert a node into the tree
  insert(key, value) {
    const newNode = new Node(key, value, 'red');
    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;

      if (key < current.key)
        current = current.left;
      else if (key > current.key)
        current = current.right;
      else {
        current.value = value;
        return;
      }
    }

    newNode.parent = parent;

    if (!parent)
      this.root = newNode;
    else if (key < parent.key)
      parent.left = newNode;
    else
      parent.right = newNode;

    this.fixInsertionViolation(newNode);
  }

  // Helper function to find the minimum node in a subtree
  findMinimum(node) {
    while (node.left)
      node = node.left;

    return node;
  }

  // Helper function to fix violations after deletion
  fixDeletionViolation(node) {
    while (node !== this.root && node.color === 'black') {
      if (node === node.parent.left) {
        let sibling = node.parent.right;

        if (sibling.color === 'red') {
          sibling.color = 'black';
          node.parent.color = 'red';
          this.leftRotate(node.parent);
          sibling = node.parent.right;
        }

        if (
          sibling.left.color === 'black' &&
          sibling.right.color === 'black'
        ) {
          sibling.color = 'red';
          node = node.parent;
        } else {
          if (sibling.right.color === 'black') {
            sibling.left.color = 'black';
            sibling.color = 'red';
            this.rightRotate(sibling);
            sibling = node.parent.right;
          }

          sibling.color = node.parent.color;
          node.parent.color = 'black';
          sibling.right.color = 'black';
          this.leftRotate(node.parent);
          node = this.root;
        }
      } else {
        let sibling = node.parent.left;

        if (sibling.color === 'red') {
          sibling.color = 'black';
          node.parent.color = 'red';
          this.rightRotate(node.parent);
          sibling = node.parent.left;
        }

        if (
          sibling.left.color === 'black' &&
          sibling.right.color === 'black'
        ) {
          sibling.color = 'red';
          node = node.parent;
        } else {
          if (sibling.left.color === 'black') {
            sibling.right.color = 'black';
            sibling.color = 'red';
            this.leftRotate(sibling);
            sibling = node.parent.left;
          }

          sibling.color = node.parent.color;
          node.parent.color = 'black';
          sibling.left.color = 'black';
          this.rightRotate(node.parent);
          node = this.root;
        }
      }
    }

    node.color = 'black';
  }

  // Helper function to delete a node from the tree
  delete(key) {
    let current = this.root;

    while (current) {
      if (key === current.key)
        break;
      else if (key < current.key)
        current = current.left;
      else
        current = current.right;
    }

    if (!current)
      return;

    let node, child;

    if (!current.left || !current.right)
      node = current;
    else
      node = this.findMinimum(current.right);

    if (node.left)
      child = node.left;
    else
      child = node.right;

    if (child)
      child.parent = node.parent;

    if (!node.parent) {
      this.root = child;
    } else {
      if (node === node.parent.left)
        node.parent.left = child;
      else
        node.parent.right = child;
    }

    if (node !== current)
      current.key = node.key;

    if (node.color === 'black')
      this.fixDeletionViolation(child);
  }

  // Helper function to recursively traverse the tree in order
  traverseInOrder(node = this.root, callback) {
    if (node) {
      this.traverseInOrder(node.left, callback);
      callback(node);
      this.traverseInOrder(node.right, callback);
    }
  }

  // Print the tree elements in order
  printInOrder() {
    this.traverseInOrder(node => console.log(node.key, node.value));
  }
}

// Example usage
const tree = new RedBlackTree();
tree.insert(5, 'Value 5');
tree.insert(10, 'Value 10');
tree.insert(3, 'Value 3');
tree.insert(7, 'Value 7');
tree.insert(20, 'Value 20');
tree.insert(15, 'Value 15');
tree.insert(4, 'Value 4');

tree.printInOrder(); // Outputs: 3 4 5 7 10 15 20
tree.delete(7);
tree.printInOrder(); // Outputs: 3 4 5 10 15 20
