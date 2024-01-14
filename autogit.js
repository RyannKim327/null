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
  }

  // Insert a value into the tree
  insert(value) {
    const node = new Node(value, "red");
    // If the tree is empty, make the new node the root and color it black
    if (!this.root) {
      this.root = node;
      this.root.color = "black";
      return;
    }

    let current = this.root;
    let parent = null;

    // Find the position to insert the node
    while (current) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Set the new node's parent
    node.parent = parent;

    // Insert the new node
    if (value < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    // Balance the tree
    this.balanceTree(node);
  }

  // Balance the tree after insertion
  balanceTree(node) {
    while (node.parent && node.parent.color === "red") {
      // If the parent is the left child of the grandparent
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        // Case 1: If the uncle is also red, recolor
        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          // Case 2: If the uncle is black and the node is a right child, rotate left
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          // Case 3: If the uncle is black and the node is a left child, recolor and rotate right
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        // If the parent is the right child of the grandparent (symmetric cases)
        const uncle = node.parent.parent.left;

        // Case 1: If the uncle is also red, recolor
        if (uncle && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          // Case 2: If the uncle is black and the node is a left child, rotate right
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          // Case 3: If the uncle is black and the node is a right child, recolor and rotate left
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    // Color the root black
    this.root.color = "black";
  }

  // Left rotate the tree
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

  // Right rotate the tree
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

  // Print the tree in-order
  printInOrder(node = this.root) {
    if (node) {
      this.printInOrder(node.left);
      console.log(node.value);
      this.printInOrder(node.right);
    }
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

tree.printInOrder(); // Outputs: 10 20 30 40 50
