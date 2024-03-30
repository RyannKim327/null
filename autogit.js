class Node {
  constructor(data, color) {
    this.data = data;
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

  // Helper functions for rotation, coloring, and balancing

  // Left rotation
  rotateLeft(node) {
    let temp = node.right;
    node.right = temp.left;
    if (temp.left !== null) {
      temp.left.parent = node;
    }
    temp.parent = node.parent;
    if (node.parent === null) {
      this.root = temp;
    } else if (node === node.parent.left) {
      node.parent.left = temp;
    } else {
    node.parent.right = temp;
    }
    temp.left = node;
    node.parent = temp;
  }

  // Right rotation
  rotateRight(node) {
    let temp = node.left;
    node.left = temp.right;
    if (temp.right !== null) {
      temp.right.parent = node;
    }
    temp.parent = node.parent;
    if (node.parent === null) {
      this.root = temp;
    } else if (node === node.parent.right) {
      node.parent.right = temp;
    } else {
    node.parent.left = temp;
    }
    temp.right = node;
    node.parent = temp;
  }

  // Helper function for fixing violations in the tree
  fixViolation(node) {
    let parent = null;
    let grandparent = null;

    while (node !== this.root && node.color !== 'black' && node.parent.color === 'red') {
      parent = node.parent;
      grandparent = node.parent.parent;

      // Case A: Parent is left child of grandparent
      if (parent === grandparent.left) {
        let uncle = grandparent.right;
        if (uncle !== null && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotateRight(grandparent);
          let temp = parent.color;
          parent.color = grandparent.color;
          grandparent.color = temp;
          node = parent;
        }
      } else {
        // Case B: Parent is right child of grandparent
        let uncle = grandparent.left;
        if (uncle !== null && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotateLeft(grandparent);
          let temp = parent.color;
          parent.color = grandparent.color;
          grandparent.color = temp;
          node = parent;
        }
      }
    }
    this.root.color = 'black';
  }

  insert(data) {
    let newNode = new Node(data, 'red');
    this.root = this.insertNode(this.root, newNode);
    this.fixViolation(newNode);
  }

  insertNode(root, node) {
    if (root === null) {
      return node;
    }
    if (node.data < root.data) {
      root.left = this.insertNode(root.left, node);
      root.left.parent = root;
    } else if (node.data > root.data) {
      root.right = this.insertNode(root.right, node);
      root.right.parent = root;
    }
    return root;
  }
}
