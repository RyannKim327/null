// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "red"; // Set default color to red
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);

    // Helper function to recursively insert nodes
    const insertNode = (node, newNode) => {
      if (node == null) {
        this.root = newNode;
        newNode.color = "black"; // Set root color to black
        return;
      }

      if (newNode.value < node.value) {
        if (node.left == null) {
          node.left = newNode;
          newNode.parent = node;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right == null) {
          node.right = newNode;
          newNode.parent = node;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    insertNode(this.root, newNode);
    this.fixTree(newNode);
  }

  // Fix the tree after insertion
  fixTree(node) {
    while (node.parent && node.parent.color === "red") {
      let uncle;

      if (node.parent === node.parent.parent.left) {
        uncle = node.parent.parent.right;

        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        uncle = node.parent.parent.left;

        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = "black";
  }

  // Left rotation
  rotateLeft(node) {
    const rightChild = node.right;

    if (rightChild) {
      node.right = rightChild.left;

      if (rightChild.left) {
        rightChild.left.parent = node;
      }

      rightChild.parent = node.parent;
    }

    if (node.parent == null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    if (rightChild) {
      rightChild.left = node;
    }

    node.parent = rightChild;
  }

  // Right rotation
  rotateRight(node) {
    const leftChild = node.left;

    if (leftChild) {
      node.left = leftChild.right;

      if (leftChild.right) {
        leftChild.right.parent = node;
      }

      leftChild.parent = node.parent;
    }

    if (node.parent == null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    if (leftChild) {
      leftChild.right = node;
    }

    node.parent = leftChild;
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
