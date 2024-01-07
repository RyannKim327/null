class Node {
  constructor(key, color, left = null, right = null, parent = null) {
    this.key = key;
    this.color = color; // 0 represents black, 1 represents red
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  isRed() {
    return this.color === 1;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a key into the tree
  insert(key) {
    const node = new Node(key, 1); // New nodes are always red

    if (!this.root) {
      // If the tree is empty, make the new node the root
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }

    this.fixViolations(node);
  }

  // Insert a node recursively
  insertNode(root, node) {
    if (node.key < root.key) {
      if (root.left === null) {
        root.left = node;
        node.parent = root;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.key > root.key) {
      if (root.right === null) {
        root.right = node;
        node.parent = root;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  // Fix violations after insertion
  fixViolations(node) {
    while (node !== this.root && node.isRed() && node.parent.isRed()) {
      const parent = node.parent;
      const grandParent = parent.parent;

      if (parent === grandParent.left) {
        const uncle = grandParent.right;
        if (uncle && uncle.isRed()) {
          // Case 1: Uncle is red, re-color nodes
          grandParent.color = 1;
          parent.color = 0;
          uncle.color = 0;
          node = grandParent;
        } else {
          if (node === parent.right) {
            // Case 2: Node is right child, rotate left
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is left child, rotate right
          this.rotateRight(grandParent);
          [parent.color, grandParent.color] = [grandParent.color, parent.color];
          node = parent;
        }
      } else {
        const uncle = grandParent.left;
        if (uncle && uncle.isRed()) {
          // Case 1: Uncle is red, re-color nodes
          grandParent.color = 1;
          parent.color = 0;
          uncle.color = 0;
          node = grandParent;
        } else {
          if (node === parent.left) {
            // Case 2: Node is left child, rotate right
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is right child, rotate left
          this.rotateLeft(grandParent);
          [parent.color, grandParent.color] = [grandParent.color, parent.color];
          node = parent;
        }
      }
    }

    this.root.color = 0; // Root node is always black
  }

  // Rotate the tree left at the given node
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

  // Rotate the tree right at the given node
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

  // Print the tree using in-order traversal
  printTree() {
    this.printNode(this.root);
  }

  // Print a node recursively
  printNode(node) {
    if (node !== null) {
      this.printNode(node.left);
      console.log(`Key: ${node.key}, Color: ${node.color}`);
      this.printNode(node.right);
    }
  }
}

// Example usage:
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.printTree();
