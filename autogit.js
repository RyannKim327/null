// Node class
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = 'red'; // All new nodes are initially red
  }
}

// RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a node into the tree
  insert(key, value) {
    const newNode = new Node(key, value);
    if (!this.root) {
      this.root = newNode;
      this.root.color = 'black'; // Root is always black
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.right, newNode);
      }
    }

    // Fix red-black tree violations
    if (newNode !== this.root && newNode.parent.color === 'red') {
      this.fixViolations(newNode);
    }
  }

  fixViolations(node) {
    while (node.parent && node.parent.color === 'red') {
      const parentNode = node.parent;
      const grandparentNode = node.parent.parent;

      // Case 1: Parent is the left child of the grandparent
      if (parentNode === grandparentNode.left) {
        const uncleNode = grandparentNode.right;

        // Case 1.1: Uncle is also red, recoloring is required
        if (uncleNode && uncleNode.color === 'red') {
          parentNode.color = 'black';
          uncleNode.color = 'black';
          grandparentNode.color = 'red';
          node = grandparentNode; // Move up the tree
        } else {
          // Case 1.2: Uncle is black, node is the right child
          if (node === parentNode.right) {
            this.rotateLeft(parentNode);
            node = parentNode;
            parentNode = node.parent;
          }

          // Case 1.3: Uncle is black, node is the left child
          parentNode.color = 'black';
          grandparentNode.color = 'red';
          this.rotateRight(grandparentNode);
        }
      } else {
        // Case 2: Parent is the right child of the grandparent
        const uncleNode = grandparentNode.left;

        // Case 2.1: Uncle is also red, recoloring and rotation required
        if (uncleNode && uncleNode.color === 'red') {
          parentNode.color = 'black';
          uncleNode.color = 'black';
          grandparentNode.color = 'red';
          node = grandparentNode; // Move up the tree
        } else {
          // Case 2.2: Uncle is black, node is the left child
          if (node === parentNode.left) {
            this.rotateRight(parentNode);
            node = parentNode;
            parentNode = node.parent;
          }

          // Case 2.3: Uncle is black, node is the right child
          parentNode.color = 'black';
          grandparentNode.color = 'red';
          this.rotateLeft(grandparentNode);
        }
      }
    }

    this.root.color = 'black'; // Ensure root is always black
  }

  rotateLeft(node) {
    const rightNode = node.right;
    node.right = rightNode.left;

    if (rightNode.left) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;

    if (!node.parent) {
      this.root = rightNode;
    } else if (node === node.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  rotateRight(node) {
    const leftNode = node.left;
    node.left = leftNode.right;

    if (leftNode.right) {
      leftNode.right.parent = node;
    }

    leftNode.parent = node.parent;

    if (!node.parent) {
      this.root = leftNode;
    } else if (node === node.parent.left) {
      node.parent.left = leftNode;
    } else {
      node.parent.right = leftNode;
    }

    leftNode.right = node;
    node.parent = leftNode;
  }

  // Perform an inorder traversal of the tree
  inorder() {
    this.inorderHelper(this.root);
  }

  inorderHelper(node) {
    if (node) {
      this.inorderHelper(node.left);
      console.log(node.key, node.value);
      this.inorderHelper(node.right);
    }
  }
}
const tree = new RedBlackTree();
tree.insert(5, 'Apple');
tree.insert(2, 'Banana');
tree.insert(8, 'Orange');
tree.insert(1, 'Mango');
tree.insert(3, 'Grapes');
tree.insert(7, 'Pineapple');

tree.inorder();
