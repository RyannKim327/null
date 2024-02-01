class Node {
  constructor(value, color) {
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
    this.NULL_NODE = new Node(null, "BLACK"); // Null node with color BLACK
  }
  
  // Insert a value into the Red-Black tree
  insert(value) {
    const newNode = new Node(value, "RED"); // New node is always red

    // BST insert operation
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }

    this._fixTree(newNode); // Fix the Red-Black tree properties
  }

  // Internal method to insert a node into the tree
  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
        newNode.parent = root;
      } else {
        this._insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        newNode.parent = root;
      } else {
        this._insertNode(root.right, newNode);
      }
    }
  }

  // Internal method to fix the Red-Black tree properties after insertion
  _fixTree(node) {
    while (node.parent !== null && node.parent.color === "RED") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        // Case 1: Uncle is red
        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          // Case 2: Uncle is black and node is a right child
          if (node === node.parent.right) {
            node = node.parent;
            this._rotateLeft(node);
          }

          // Case 3: Uncle is black and node is a left child
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this._rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;

        // Case 1: Uncle is red
        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          // Case 2: Uncle is black and node is a left child
          if (node === node.parent.left) {
            node = node.parent;
            this._rotateRight(node);
          }

          // Case 3: Uncle is black and node is a right child
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this._rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = "BLACK"; // Root is always black
  }

  // Rotate left around a given node
  _rotateLeft(node) {
    let rightChild = node.right;
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

  // Rotate right around a given node
  _rotateRight(node) {
    let leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
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

  // Perform inorder traversal of the tree
  inorder(node = this.root) {
    if (node !== null && node !== this.NULL_NODE) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}
const rbTree = new RedBlackTree();
rbTree.insert(5);
rbTree.insert(10);
rbTree.insert(15);
rbTree.insert(20);
rbTree.insert(25);

rbTree.inorder(); // Prints the inorder traversal of the tree
