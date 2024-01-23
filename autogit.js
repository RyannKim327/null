class RedBlackNode {
  constructor(data) {
    this.data = data;
    this.color = 'red';
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insertion
  insert(data) {
    const newNode = new RedBlackNode(data);
    if (this.root === null) {
      this.root = newNode;
      this.root.color = 'black';
    } else {
      let current = this.root;
      let parent = null;
      while (current !== null) {
        parent = current;
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      newNode.parent = parent;
      if (data < parent.data) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
      this.fixTreeAfterInsert(newNode);
    }
  }

  // Fix tree after insertion to maintain red-black properties
  fixTreeAfterInsert(node) {
    while (node.parent !== null && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === 'red') {
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
        if (uncle !== null && uncle.color === 'red') {
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

  // Left rotation
  rotateLeft(node) {
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

  // Right rotation
  rotateRight(node) {
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

  // Other operations (e.g., deletion, searching) can be implemented following similar principles.
}
