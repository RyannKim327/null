class Node {
  constructor(value, color) {
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
    this.nil = new Node(null, 'black'); // Sentinel node
  }

  insert(value) {
    const newNode = new Node(value, 'red');
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            newNode.parent = current;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            newNode.parent = current;
            break;
          }
          current = current.right;
        }
      }
    }
    this.fixInsertionViolation(newNode);
  }

  fixInsertionViolation(newNode) {
    while (newNode.parent !== null && newNode.parent.color === 'red') {
      if (newNode.parent === newNode.parent.parent.left) {
        const uncle = newNode.parent.parent.right;
        if (uncle !== null && uncle.color === 'red') {
          newNode.parent.color = 'black';
          uncle.color = 'black';
          newNode.parent.parent.color = 'red';
          newNode = newNode.parent.parent;
        } else {
          if (newNode === newNode.parent.right) {
            newNode = newNode.parent;
            this.rotateLeft(newNode);
          }
          newNode.parent.color = 'black';
          newNode.parent.parent.color = 'red';
          this.rotateRight(newNode.parent.parent);
        }
      } else {
        const uncle = newNode.parent.parent.left;
        if (uncle !== null && uncle.color === 'red') {
          newNode.parent.color = 'black';
          uncle.color = 'black';
          newNode.parent.parent.color = 'red';
          newNode = newNode.parent.parent;
        } else {
          if (newNode === newNode.parent.left) {
            newNode = newNode.parent;
            this.rotateRight(newNode);
          }
          newNode.parent.color = 'black';
          newNode.parent.parent.color = 'red';
          this.rotateLeft(newNode.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  rotateLeft(node) {
    const pivot = node.right;
    node.right = pivot.left;
    if (pivot.left !== null) {
      pivot.left.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    pivot.left = node;
    node.parent = pivot;
  }

  rotateRight(node) {
    const pivot = node.left;
    node.left = pivot.right;
    if (pivot.right !== null) {
      pivot.right.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.right) {
      node.parent.right = pivot;
    } else {
      node.parent.left = pivot;
    }
    pivot.right = node;
    node.parent = pivot;
  }
}
