// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "red"; // Default color is red
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Helper function to perform left rotation
  leftRotate(node) {
    const y = node.right;
    node.right = y.left;

    if (y.left !== null) {
      y.left.parent = node;
    }

    y.parent = node.parent;

    if (node.parent === null) {
      this.root = y;
    } else if (node === node.parent.left) {
      node.parent.left = y;
    } else {
      node.parent.right = y;
    }

    y.left = node;
    node.parent = y;
  }

  // Helper function to perform right rotation
  rightRotate(node) {
    const x = node.left;
    node.left = x.right;

    if (x.right !== null) {
      x.right.parent = node;
    }

    x.parent = node.parent;

    if (node.parent === null) {
      this.root = x;
    } else if (node === node.parent.right) {
      node.parent.right = x;
    } else {
      node.parent.left = x;
    }

    x.right = node;
    node.parent = x;
  }

  // Helper function to maintain red-black properties after insertion
  insertFixup(node) {
    while (node !== this.root && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        const y = node.parent.parent.right;

        if (y !== null && y.color === "red") {
          node.parent.color = "black";
          y.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }

          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rightRotate(node.parent.parent);
        }
      } else {
        const y = node.parent.parent.left;

        if (y !== null && y.color === "red") {
          node.parent.color = "black";
          y.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }

          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = "black";
  }

  // Helper function to insert a node into the tree
  insert(value) {
    const newNode = new Node(value);
    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    if (parent === null) {
      this.root = newNode;
    } else if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.insertFixup(newNode);
  }

  // Helper function to perform an in-order traversal of the tree
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Usage:
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

tree.inOrderTraversal();
