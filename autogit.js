class RedBlackTreeNode {
  constructor(value, color = 'RED') {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new RedBlackTreeNode(value);
    if (!this.root) {
      this.root = newNode;
      this.root.color = 'BLACK';
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
      this.balanceTreeAfterInsertion(newNode);
    }
  }

  balanceTreeAfterInsertion(node) {
    while (node.parent && node.parent.color === 'RED') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'RED') {
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
        if (uncle && uncle.color === 'RED') {
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
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }
}
