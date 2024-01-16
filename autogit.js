class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.color = "red"; // Initialize color to red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
    this.nullLeaf = new Node(null, null);
    this.nullLeaf.color = "black"; // Leaf nodes are always black
  }
  // Tree operations go here
}
class RedBlackTree {
  // ...

  insert(key, value) {
    const newNode = new Node(key, value);
    newNode.left = this.nullLeaf;
    newNode.right = this.nullLeaf;

    if (this.root === null) {
      // Handle the case when the tree is empty
      this.root = newNode;
      newNode.color = "black";
    } else {
      // Handle the case when the tree is not empty
      let currentNode = this.root;
      let parentNode = null;

      while (currentNode !== this.nullLeaf) {
        parentNode = currentNode;

        if (key < currentNode.key) {
          currentNode = currentNode.left;
        } else if (key > currentNode.key) {
          currentNode = currentNode.right;
        } else {
          // If the key already exists, update its value
          currentNode.value = value;
          return;
        }
      }

      newNode.parent = parentNode;

      if (key < parentNode.key) {
        parentNode.left = newNode;
      } else {
        parentNode.right = newNode;
      }

      this.insertFixup(newNode);
    }
  }

  insertFixup(node) {
    let currentNode = node;

    // Perform rotations and color adjustments until the tree becomes balanced
    while (currentNode.parent.color === "red") {
      if (currentNode.parent === currentNode.parent.parent.left) {
        let uncleNode = currentNode.parent.parent.right;

        if (uncleNode !== null && uncleNode.color === "red") {
          // Case 1: Uncle is red
          currentNode.parent.color = "black";
          uncleNode.color = "black";
          currentNode.parent.parent.color = "red";
          currentNode = currentNode.parent.parent;
        } else {
          if (currentNode === currentNode.parent.right) {
            // Case 2: Uncle is black and current node is a right child
            currentNode = currentNode.parent;
            this.leftRotate(currentNode);
          }

          // Case 3: Uncle is black and current node is a left child
          currentNode.parent.color = "black";
          currentNode.parent.parent.color = "red";
          this.rightRotate(currentNode.parent.parent);
        }
      } else {
        let uncleNode = currentNode.parent.parent.left;

        if (uncleNode !== null && uncleNode.color === "red") {
          // Case 1: Uncle is red
          currentNode.parent.color = "black";
          uncleNode.color = "black";
          currentNode.parent.parent.color = "red";
          currentNode = currentNode.parent.parent;
        } else {
          if (currentNode === currentNode.parent.left) {
            // Case 2: Uncle is black and current node is a left child
            currentNode = currentNode.parent;
            this.rightRotate(currentNode);
          }

          // Case 3: Uncle is black and current node is a right child
          currentNode.parent.color = "black";
          currentNode.parent.parent.color = "red";
          this.leftRotate(currentNode.parent.parent);
        }
      }
    }

    this.root.color = "black"; // Ensure the root is always black
  }

  // Helper methods for rotation operations
  leftRotate(node) {
    let yNode = node.right;
    node.right = yNode.left;

    if (yNode.left !== this.nullLeaf) {
      yNode.left.parent = node;
    }

    yNode.parent = node.parent;

    if (node.parent === null) {
      this.root = yNode;
    } else if (node === node.parent.left) {
      node.parent.left = yNode;
    } else {
      node.parent.right = yNode;
    }

    yNode.left = node;
    node.parent = yNode;
  }

  rightRotate(node) {
    let yNode = node.left;
    node.left = yNode.right;

    if (yNode.right !== this.nullLeaf) {
      yNode.right.parent = node;
    }

    yNode.parent = node.parent;

    if (node.parent === null) {
      this.root = yNode;
    } else if (node === node.parent.right) {
      node.parent.right = yNode;
    } else {
      node.parent.left = yNode;
    }

    yNode.right = node;
    node.parent = yNode;
  }
}
const tree = new RedBlackTree();
tree.insert(5, "Apple");
tree.insert(3, "Banana");
tree.insert(7, "Cucumber");
tree.insert(4, "Date");
tree.insert(2, "Elderberry");
