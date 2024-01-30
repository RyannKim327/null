// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Define the Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.color = 'red';
    }
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      this.root.color = 'black';
    } else {
      this.insertNode(this.root, newNode);
      this.fixTree(newNode);
    }
  }

  // Insert a node into the tree
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
        node.parent = root;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
        node.parent = root;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  // Fix the tree after insertion
  fixTree(node) {
    while (
      node !== this.root &&
      node.parent.color === 'red' &&
      node.color !== 'black'
    ) {
      let parent = node.parent;
      let grandparent = parent.parent;

      if (parent === grandparent.left) {
        let uncle = grandparent.right;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          // Case 2: Node is a right child
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is a left child
          this.rotateRight(grandparent);
          [parent.color, grandparent.color] = [grandparent.color, parent.color];
          node = parent;
        }
      } else {
        let uncle = grandparent.left;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          grandparent.color = 'red';
          parent.color = 'black';
          uncle.color = 'black';
          node = grandparent;
        } else {
          // Case 2: Node is a left child
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          // Case 3: Node is a right child
          this.rotateLeft(grandparent);
          [parent.color, grandparent.color] = [grandparent.color, parent.color];
          node = parent;
        }
      }
    }

    this.root.color = 'black';
  }

  // Rotate left around a node
  rotateLeft(node) {
    let right = node.right;

    node.right = right.left;
    if (right.left) right.left.parent = node;

    right.parent = node.parent;
    if (node.parent === null) {
      this.root = right;
    } else if (node === node.parent.left) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }

    right.left = node;
    node.parent = right;
  }

  // Rotate right around a node
  rotateRight(node) {
    let left = node.left;

    node.left = left.right;
    if (left.right) left.right.parent = node;

    left.parent = node.parent;
    if (node.parent === null) {
      this.root = left;
    } else if (node === node.parent.left) {
      node.parent.left = left;
    } else {
      node.parent.right = left;
    }

    left.right = node;
    node.parent = left;
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
// ... add more values as needed

console.log(tree); // Print the tree structure
