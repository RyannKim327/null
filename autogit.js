class Node {
  constructor(key, color) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
    this.NIL = new Node(null, 'BLACK');
  }

  insert(key) {
    const newNode = new Node(key, 'RED');
    let current = this.root;
    let parent = null;

    // Traverse the tree to find the proper position
    while (current !== null && current !== this.NIL) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Set the parent of the new node
    newNode.parent = parent;

    // If the tree is empty, set the new node as the root
    if (parent === null) {
      this.root = newNode;
    } else if (key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    // Fix the tree violations
    this.fixTreeViolations(newNode);
  }

  fixTreeViolations(newNode) {
    while (
      newNode.parent !== null &&
      newNode.parent.color === 'RED' &&
      newNode !== this.root
    ) {
      const parent = newNode.parent;
      const grandparent = newNode.parent.parent;

      // Case 1: Parent's sibling is red
      if (grandparent.left === parent) {
        const uncle = grandparent.right;
        if (uncle !== null && uncle.color === 'RED') {
          parent.color = 'BLACK';
          uncle.color = 'BLACK';
          grandparent.color = 'RED';
          newNode = grandparent;
        }
      } else {
        const uncle = grandparent.left;
        if (uncle !== null && uncle.color === 'RED') {
          parent.color = 'BLACK';
          uncle.color = 'BLACK';
          grandparent.color = 'RED';
          newNode = grandparent;
        }
      }

      // Case 2: Parent's sibling is black
      else {
        if (grandparent.left === parent) {
          if (parent.right === newNode) {
            this.rotateLeft(parent);
            newNode = parent;
            parent = newNode.parent;
          }
          this.rotateRight(grandparent);
        } else {
          if (parent.left === newNode) {
            this.rotateRight(parent);
            newNode = parent;
            parent = newNode.parent;
          }
          this.rotateLeft(grandparent);
        }
        parent.color = 'BLACK';
        grandparent.color = 'RED';
      }
    }

    // Set the root color to BLACK
    this.root.color = 'BLACK';
  }

  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
    if (rightChild.left !== this.NIL) {
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

  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right !== this.NIL) {
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
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
// ... Insert more keys as needed
