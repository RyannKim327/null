// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    // Define the NIL node, which represents an empty child
    this.NIL = {
      key: null,
      color: 'BLACK',
      left: null,
      right: null,
      parent: null,
    };
    // Set the root node to NIL initially
    this.root = this.NIL;
  }

  // Rotate left around a given node
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== this.NIL) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === this.NIL) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Rotate right around a given node
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== this.NIL) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === this.NIL) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Insert a new node with the given key into the tree
  insert(key) {
    const newNode = {
      key,
      color: 'RED',
      left: this.NIL,
      right: this.NIL,
      parent: null,
    };

    let current = this.root;
    let parent = null;

    while (current !== this.NIL) {
      parent = current;

      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    if (parent === null) {
      this.root = newNode;
    } else if (key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.insertFixup(newNode);
  }

  // Fix any violations of the red-black tree properties after an insertion
  insertFixup(node) {
    while (node.parent.color === 'RED') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = 'BLACK';
  }
}

// Usage example
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(40);
