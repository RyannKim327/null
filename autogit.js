// Node class for a red-black tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value into the tree
  insert(value) {
    const newNode = new Node(value, 'red');
    if (!this.root) {
      this.root = newNode;
      newNode.color = 'black';
      return;
    }
    let currNode = this.root;
    let parentNode = null;

    while (currNode) {
      parentNode = currNode;
      if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }

    newNode.parent = parentNode;

    if (value < parentNode.value) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }

    this.fixInsertViolations(newNode);
  }

  // Fix any violations that occur after an insertion
  fixInsertViolations(node) {
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
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
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
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  // Rotate the tree left (used in fixing violations)
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

  // Rotate the tree right (used in fixing violations)
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right) {
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

  // Perform an in-order traversal of the tree
  inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }
}

// Usage example
const tree = new RedBlackTree();
tree.insert(5);
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);

tree.inOrderTraversal(tree.root);
