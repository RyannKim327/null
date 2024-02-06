// Node class representing a tree node
class Node {
  constructor(key, color) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a new key into the tree
  insert(key) {
    const node = new Node(key, "RED");

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent = null;

      while (current !== null) {
        parent = current;

        if (key < current.key) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      node.parent = parent;

      if (key < parent.key) {
        parent.left = node;
      } else {
        parent.right = node;
      }

      this.fixInsert(node);
    }

    // Ensure root is always black
    this.root.color = "BLACK";
  }

  // Fix the tree property violations after insertion
  fixInsert(node) {
    while (node !== this.root && node.parent.color === "RED") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        if (uncle !== null && uncle.color === "RED") {
          // Case 1: Uncle is red
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black, and node is a right child
            node = node.parent;
            this.rotateLeft(node);
          }

          // Case 3: Uncle is black, and node is a left child
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;

        if (uncle !== null && uncle.color === "RED") {
          // Case 1: Uncle is red
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Uncle is black, and node is a left child
            node = node.parent;
            this.rotateRight(node);
          }

          // Case 3: Uncle is black, and node is a right child
          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateLeft(node.parent.parent);
        }
      }
    }
  }

  // Rotate the tree left at the given node
  rotateLeft(node) {
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

  // Rotate the tree right at the given node
  rotateRight(node) {
    let leftChild = node.left;
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

  // Perform an in-order traversal of the tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.key);
      this.inOrderTraversal(node.right);
    }
  }
}

// Usage example:
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.inOrderTraversal(tree.root);
