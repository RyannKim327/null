// Define a class to represent a node in the red-black tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color; // "red" or "black"
  }
}

// Define the red-black tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Function to insert a value into the tree
  insert(value) {
    const newNode = new Node(value, "red");
    if (!this.root) {
      // If the tree is empty, make the new node the root
      this.root = newNode;
    } else {
      let node = this.root;
      while (node) {
        if (value < node.value) {
          if (node.left) {
            node = node.left;
          } else {
            node.left = newNode;
            newNode.parent = node;
            break;
          }
        } else if (value > node.value) {
          if (node.right) {
            node = node.right;
          } else {
            node.right = newNode;
            newNode.parent = node;
            break;
          }
        } else {
          // If the value already exists in the tree, do nothing
          return;
        }
      }
      this.fixInsertViolation(newNode);
    }
  }

  // Function to fix any potential red-black tree violations after insertion
  fixInsertViolation(node) {
    while (
      node.parent &&
      node.parent.color === "red" &&
      node.color === "red"
    ) {
      const parent = node.parent;
      const grandParent = parent.parent;
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.color === "red") {
          grandParent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandParent;
        } else {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }
          parent.color = "black";
          grandParent.color = "red";
          this.rotateRight(grandParent);
        }
      } else {
        const uncle = grandParent.left;
        if (uncle && uncle.color === "red") {
          grandParent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandParent;
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }
          parent.color = "black";
          grandParent.color = "red";
          this.rotateLeft(grandParent);
        }
      }
    }
    this.root.color = "black";
  }

  // Function to perform a left rotation on a node
  rotateLeft(node) {
    const pivot = node.right;
    node.right = pivot.left;
    if (pivot.left) {
      pivot.left.parent = node;
    }
    pivot.parent = node.parent;
    if (!node.parent) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    pivot.left = node;
    node.parent = pivot;
  }

  // Function to perform a right rotation on a node
  rotateRight(node) {
    const pivot = node.left;
    node.left = pivot.right;
    if (pivot.right) {
      pivot.right.parent = node;
    }
    pivot.parent = node.parent;
    if (!node.parent) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    pivot.right = node;
    node.parent = pivot;
  }

  // Function to search for a value in the tree
  search(value) {
    let node = this.root;
    while (node) {
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }
}

// Test the red-black tree implementation
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(15);
tree.insert(30);
console.log(tree.search(20)); // Output: true
console.log(tree.search(25)); // Output: false
