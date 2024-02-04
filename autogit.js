// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = 'red'; // Newly inserted node is always red during insertion
  }
}

// RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insertion method
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // If the tree is empty, the new node becomes the root and is colored black
      newNode.color = 'black';
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node
  insertNode(root, newNode) {
    // Recursive search for the proper position to insert the new node
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }

    // Perform fix-up operations to maintain red-black tree properties
    this.fixViolation(newNode);
  }

  // Helper method to fix violations and maintain red-black tree properties after insertion
  fixViolation(node) {
    while (node !== this.root && node.color !== 'black' && node.parent.color === 'red') {
      const parent = node.parent;
      const grandparent = node.parent.parent;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          // Case 2: Node is right child of its parent
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is left child of its parent
          this.rotateRight(grandparent);
          [parent.color, grandparent.color] = [grandparent.color, parent.color];
          node = parent;
        }
      } else {
        const uncle = grandparent.left;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          // Case 2: Node is left child of its parent
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is right child of its parent
          this.rotateLeft(grandparent);
          [parent.color, grandparent.color] = [grandparent.color, parent.color];
          node = parent;
        }
      }
    }

    // Ensure the root is black
    this.root.color = 'black';
  }

  // Left rotation method
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

  // Right rotation method
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }
}
// Example usage
const tree = new RedBlackTree();

// Insert nodes
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);

// Print the tree (inorder traversal)
console.log("Inorder traversal:");
printInorder(tree.root);

// Inorder traversal - Helper method
function printInorder(node) {
  if (node !== null) {
    printInorder(node.left);
    console.log(node.value);
    printInorder(node.right);
  }
}
